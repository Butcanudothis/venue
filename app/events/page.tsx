import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import EventsClient from "./EventsClient";

const EventsPage = async () => {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="You aren't signed in."
                    subtitle="Sign in to see your Events."
                />

            </ClientOnly>
        )
    }

    const reservations = await getReservations(
        { userId: currentUser.id }
    );

    if(!reservations.length) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No Events Reserved."
                    subtitle="You haven't reserved any events yet."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <EventsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default EventsPage;