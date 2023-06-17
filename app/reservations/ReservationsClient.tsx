'use client';

import axios from "axios";
import { toast } from "react-hot-toast";

import { useCallback, useState }   from "react";
import { useRouter } from "next/navigation";
import { SafeReservation, SafeUser } from "../types";
import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";

interface ReservationsClientProps {
    reservations: SafeReservation[];
    currentUser?: SafeUser;
}


const ReservationsClient = ({ reservations, currentUser }: ReservationsClientProps) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);
        axios.delete(`/api/reservations/${id}`)
            .then(() => {
                toast.success('Reservation cancelled');
                router.refresh();
            }   )    .catch(() => {
                toast.error('Something went wrong');
            }   )    .finally(() => {
                setDeletingId('');
            }
        );
    }, [router]);
    return (
        <Container>
            <Heading
                title="Bookings on your venues"
                subtitle="Below are all the bookings made on your venues"
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
            ">
                {reservations.map(reservation => (
                    <ListingCard
                        key={reservation.id}
                        data={reservation.listing}
                        reservation={reservation}
                        actionId={reservation.id}
                        disabled={deletingId === reservation.id}
                        actionLabel="Cancel guest reservation"
                        currentUser={currentUser}
                        onAction={onCancel}
                    />
                ))}
            </div>
        </Container>
    )
}

export default ReservationsClient;