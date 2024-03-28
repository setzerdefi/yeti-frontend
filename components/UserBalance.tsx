"use client";

import { useUserInfo } from "@/hooks/useUserInfo";
import { formatAmount } from "@/utils/formatAmount";

export function UserBalance() {
    const user = useUserInfo()

    const balance = user.data?.yeti.balance ?? 0n

    if (!user.isSuccess) {
        return <span>&nbsp;</span>
    }

    return <span>{formatAmount(balance, 18)}</span>
}
