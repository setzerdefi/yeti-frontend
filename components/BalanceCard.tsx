import { UserBalance } from "./UserBalance";

export function BalanceCard() {
    return (
        <div className="card w-full shadow-xl bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">Your $YETI balance</h2>
                <p><UserBalance /> $YETI</p>
            </div>
        </div>
    )
}
