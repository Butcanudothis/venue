import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback,useMemo } from "react";
import { Toast, toast } from "react-hot-toast";

import { SafeUser } from "../types";
import useLoginModal from "./useLoginModal";

interface IUseFavorite {
    listingId: string;
    currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const hasFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds || [];
        return list.includes(listingId);
    }, [currentUser, listingId]);

    const toggleFavorite = useCallback(async (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        e.stopPropagation();
        if (!currentUser) {
            loginModal.onOpen();
            return;
        }

        try {
            let request;

            if (hasFavorited) {
                request = axios.delete(`/api/favourites/${listingId}`);
            }
            else {
                request = axios.post(`/api/favourites/${listingId}`);
            }

            await request;

            router.refresh();
            toast.success("Success");
        }
        catch (err) {
            toast.error("Something went wrong");
        }

    },
        [currentUser, hasFavorited, listingId, loginModal, router]
    );

    return { hasFavorited, toggleFavorite };
}

export default useFavorite;