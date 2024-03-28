import { ClaimForm } from "./ClaimForm";
import { UserPendingRewards } from "./UserPendingRewards";

export function ClaimCard() {
    return (
        <div className="card w-full shadow-xl bg-primary text-primary-content">
            <div className="card-body flex flex-col gap-4">
                <h2 className="card-title">Claim your $cbETH rewards</h2>
                <p><UserPendingRewards /> $cbETH</p>
                <ClaimForm />
            </div>
        </div>
    )
}
