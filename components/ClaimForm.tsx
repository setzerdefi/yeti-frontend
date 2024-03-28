"use client";

import { useUserInfo } from "@/hooks/useUserInfo";
import { useAccount, useSimulateContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { DISTRIBUTOR_ADDRESS } from "@/config/addresses";
import IDistributorAbi from "@/config/abi/IDistributor";

function useSimulateClaim() {
    const user = useUserInfo()
    const { isConnected, address } = useAccount()

    const pending = user.data?.cbeth.pending ?? 0n

    const enabled = isConnected && address !== undefined && user.isSuccess && pending > 0n

    return useSimulateContract({
        abi: IDistributorAbi,
        address: DISTRIBUTOR_ADDRESS,
        functionName: "claim",
        args: [address ?? "0x"],
        query: { enabled },
    })
}

export function ClaimForm() {
    const user = useUserInfo()

    const pending = user.data?.cbeth.pending ?? 0n

    const { data, isLoading } = useSimulateClaim()
    const { data: hash, isPending, writeContract } = useWriteContract()
    const { isLoading: isConfirming } = useWaitForTransactionReceipt({ hash, confirmations: 1 })

    const loading = isLoading || isPending || isConfirming
    const disabled = loading
        || !user.isSuccess
        || pending === 0n
        || !Boolean(data?.request)

    return (
        <form onSubmit={e => {
            e.preventDefault()
            writeContract(data!.request)
        }}>
            <button className="btn w-full" disabled={disabled}>
                {loading ? <span className="loading loading-spinner"></span> : <span>Claim</span>}
            </button>
        </form>
    )
}
