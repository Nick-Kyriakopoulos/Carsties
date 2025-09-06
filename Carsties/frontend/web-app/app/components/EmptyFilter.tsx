'use client';

import { useParamsStore } from "@/hooks/useParamsStore";
import Heading from "./Heading";
import { Button } from "flowbite-react/components/Button";
import { signIn } from "next-auth/react";

type Props = {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
    showLogin?: boolean;
    callbackUrl?: string;
}

export default function EmptyFilter({
    title= 'No matches for this filter',
    subtitle= 'Try changing your filter criteria or search term', 
    showReset,
    showLogin,
    callbackUrl
    }: Props) {
        const reset = useParamsStore(state => state.reset);

        return (
            <div className="flex flex-col gap-2 items-center justify-center h-[40vh] shadow-lg">
                <Heading title={title} subtitle={subtitle} center />
                <div className="mt-4">
                    {showReset && (
                        <Button onClick={reset}>Remove Filters</Button>
                    )}
                    {showLogin && (
                        <Button onClick={() => signIn("id-server", { redirectTo: callbackUrl })}>
                            Login
                        </Button>
                    )}
                </div>
            </div>
        )
} 
