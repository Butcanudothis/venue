'use client'

import { useRouter } from "next/navigation"
import Heading from "./Heading";
import Button from "./Button";

interface EmptyState {
    title?: string,
    subtitle?: string,
    showReset?: boolean,

}

const EmptyState = ({
    title = "No Exact Matches",
    subtitle = "Try adjusting your search or filter to find what you're looking for.",
    showReset }: EmptyState) => {
        const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] gap-2">
            <Heading title={title} subtitle={subtitle} center/>
            <div className = "w-48 mt-4">
                {showReset && (
                    <Button outline
                    onClick = {() => router.push("/")}
                    label = "Remove all filters"
                    />
                )}
            </div>
        </div>
    )
}

export default EmptyState