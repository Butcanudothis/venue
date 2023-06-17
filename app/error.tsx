'use client'

import { useEffect } from "react"
import EmptyState from "./components/EmptyState"

interface ErrorStateProps {
    error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <EmptyState
            title="Something went wrong"
            subtitle="We're sorry, something went wrong. Please try again later."
        />
    )
}

export default ErrorState