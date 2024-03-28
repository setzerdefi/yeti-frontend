import { erc20Abi } from "viem";
import { useEffect } from "react";
import { useAccount, useBlockNumber, useReadContracts } from "wagmi";
import IDistributorAbi from "@/config/abi/IDistributor";
import { YETI_ADDRESS, DISTRIBUTOR_ADDRESS } from "@/config/addresses";

export function useUserInfo() {
    const { isConnected, address } = useAccount()

    const enabled = isConnected && address !== undefined

    const hook = useReadContracts({
        allowFailure: false,
        contracts: [
            {
                abi: erc20Abi,
                address: YETI_ADDRESS,
                functionName: "balanceOf",
                args: [address ?? "0x"],
            },
            {
                abi: IDistributorAbi,
                address: DISTRIBUTOR_ADDRESS,
                functionName: "pendingRewards",
                args: [address ?? "0x"],
            },
        ],
        query: {
            enabled,
            select: data => ({
                yeti: {
                    balance: data[0],
                },
                cbeth: {
                    pending: data[1],
                },
            })
        }
    })

    const { data: blockNumber } = useBlockNumber({ watch: true });

    useEffect(() => { hook.refetch() }, [blockNumber])

    return hook
}
