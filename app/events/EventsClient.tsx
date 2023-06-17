import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservation, SafeUser } from "../types";

interface EventsClientProps {
    reservations: SafeReservation[];
    currentUser?: SafeUser | null;
}


const EventsClient: React.FC<EventsClientProps> = ({
    reservations,
    currentUser,
}) => {
    return (
        <Container>
            <Heading
                title="Your Events"
                subtitle="Here are the events Venues you've reserved."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reservations.map((reservation) => {
                    return (
                        <div
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                            key={reservation.id}
                        >
                            <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${reservation.listing.pictureUrl})` }}></div>
                            <div className="p-4">
                                <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{reservation.listing.category}</p>
                                <p className="text-3xl text-gray-900">${reservation.listing.price}</p>
                                <p className="text-gray-700">{reservation.listing.title}</p>
                                <div className="mt-4">
                                    <a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">View</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            

        </Container>
    )
}

export default EventsClient;