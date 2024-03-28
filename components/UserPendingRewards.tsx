"use client";

import { useUserInfo } from "@/hooks/useUserInfo";
import { formatAmount } from "@/utils/formatAmount";

export function UserPendingRewards() {
    const user = useUserInfo()

    const pending = user.data?.cbeth.pending ?? 0n

    if (!user.isSuccess) {
        return <span>&nbsp;</span>
    }

    return <span>{formatAmount(pending, 18)}</span>
}
