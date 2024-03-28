import { ClaimForm } from "./ClaimForm";

export function ClaimCard() {
    return (
        <div className="card w-full shadow-xl bg-primary text-primary-content">
            <div className="card-body flex flex-col gap-4">
                <h2 className="card-title">Claim your $cbETH rewards</h2>
                <p>0 $cbETH</p>
                <ClaimForm />
            </div>
        </div>
    )
}
