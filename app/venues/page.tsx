import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import PropertiesClient from "./PropertiesClient";
import getListings from "../actions/getListings";

const VenuesPage = async () => {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="You aren't signed in."
                    subtitle="Sign in to see your Venues."
                />

            </ClientOnly>
        )
    }

    const listings = await getListings(
        { userId: currentUser.id }
    );

    if(!listings.length) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No venues found"
                    subtitle="Looks like you haven't listed any venues yet."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <PropertiesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default VenuesPage;