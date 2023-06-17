'use client'
import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { Range } from "react-date-range";
import dynamic from "next/dynamic";
import CountrySelect, { CountrySelectValue } from "../inputs/CountrySelect";
import queryString from "query-string";
import { formatISO } from "date-fns";
import Heading from "../Heading";
import Calendar from "../inputs/Calendar";
import Counter from "../inputs/Counter";
import RangeCounter from "../inputs/RangeCounter";

enum STEPS {
    LOCATION = 0,
    DATE= 1,
    INFO = 2,
}
const SearchModal = () => {
    const router = useRouter();
    const params = useSearchParams();
    const searchModal = useSearchModal();
    const [location, setLocation] = useState<CountrySelectValue>()
    const [step, setStep] = useState(STEPS.LOCATION);
    const [guestCount, setGuestCount] = useState(50);
    const [roomCount, setRoomCount] = useState(1);
    const [bathroomsCount, setBathroomsCount] = useState(1);
    const [dateRange, setDateRange] = useState<Range>(
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    )

    const Map = useMemo(() => dynamic(() => import("../Map"), { ssr: false }), [location]);

    const onBack = useCallback(() => {
        setStep((step) => step - 1);
    }, []);

    const onNext = useCallback(() => {
        setStep((step) => step + 1);
    }, []);

    const onSubmit = useCallback(async () => {
        if (step !== STEPS.INFO) {
            return onNext();
        }

        let currentQuery = {}

        if (params) {
            currentQuery = queryString.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            locationValue: location?.value,
            guestCount,
            roomCount,
            bathroomsCount,
        }

        if (dateRange.startDate) {
            updatedQuery.startDate = formatISO(dateRange.startDate);
        }

        if (dateRange.endDate) {
            updatedQuery.endDate = formatISO(dateRange.endDate);
        }

        const url = queryString.stringifyUrl({
            url: '/',
            query: updatedQuery
        },{skipNull: true});

        setStep(STEPS.LOCATION);
        searchModal.onClose();
        router.push(url);
    }, [step, onNext, location, guestCount, roomCount, bathroomsCount, dateRange, params, router, searchModal]);

    const actionLabel = useMemo(() => {
        if (step === STEPS.INFO) {
            return "Search";
        }
        return "Next";
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.LOCATION) {
            return undefined;
        }
        return "Back";
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title = "Where do you want to book a venue?"
                subtitle = "Enter the location you want to book a venue in"
            />
            <CountrySelect
                value={location}
                onChange={(value) => setLocation(value as CountrySelectValue)}
            />
            <hr/>
            <Map center={location?.latlng} />

        </div>
    )

    if (step === STEPS.DATE) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title = "When do you want to book a venue?"
                    subtitle = "Select the dates you want to book a venue for"
                />
                <Calendar
                    value={dateRange}
                    onChange={(value) => setDateRange(value.selection)}
                />
            </div>
        )
    }

    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title ="More information"
                    subtitle = "Find the perfect venue for your event"
                />
                <RangeCounter
                    title="Guests"
                    subtitle="How many guests will be attending?"
                    value={guestCount}
                    onChange={(value) => setGuestCount(value)} ranges={[50, 100, 150, 250, 300]}              />
                <Counter
                    title = "Additional Rooms"
                    subtitle="How many Additional rooms will you need?"
                    value={roomCount}
                    onChange={(value)=> setRoomCount(value)}
                />
                <Counter
                    title = "restrooms"
                    subtitle="How many restrooms will you need?"
                    value={bathroomsCount}
                    onChange={(value)=> setBathroomsCount(value)}
                />
            </div>
        )
    }

    return (
        <Modal
            isOpen={searchModal.isOpen}
            onClose={searchModal.onClose}
            onSubmit={onSubmit}
            title="Filters"
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step !== STEPS.LOCATION ? onBack : undefined}
            body={bodyContent}
        />
    );
}

export default SearchModal;