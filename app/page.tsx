import { ClaimCard } from "@/components/ClaimCard";
import { InfoCard } from "@/components/InfoCard";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
    return (
        <main className="w-full max-w-96 mx-auto px-2 flex flex-col gap-4">
            <div className="flex justify-end">
                <ConnectButton />
            </div>
            <InfoCard />
            <ClaimCard />
        </main>
    )
}
