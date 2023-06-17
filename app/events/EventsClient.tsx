'use client'
import { useCallback, useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservation, SafeUser } from "../types";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";
interface EventsClientProps {
    reservations: SafeReservation[];
    currentUser?: SafeUser | null;
}


const EventsClient: React.FC<EventsClientProps> = ({
    reservations,
    currentUser,
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState("");

    const onCancel = useCallback(
      (id: string) => {
        setDeletingId(id);
        axios.delete(`/api/reservations/${id}`).then(() => {
          toast.success("Reservation cancelled");
          router.refresh();
        }).catch(() => {
            toast.error("Something went wrong");
            }).finally(() => {
                setDeletingId("");
            }
        );
      },
      [router],
    )

    return (

        <Container>
            <Heading
                title="Your Events"
                subtitle="Here are the events you've hosted to or are going to."
            />
            <div className="
                mt-10
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-6
                gap-8
                "
            >
                {reservations.map((reservation) => {
                    return (
                        <ListingCard
                            key={reservation.id}
                            data={reservation.listing}
                            reservation={reservation}
                            onAction={onCancel}
                            disabled={deletingId === reservation.id}
                            actionLabel="Cancel"
                            actionId={reservation.id}
                            currentUser={currentUser}
                        />
                    );
                })}
            </div>
        </Container>
    );
}

export default EventsClient;