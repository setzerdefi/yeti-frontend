import { formatUnits } from "viem";

export function formatAmount(amount: bigint, decimals: number, maximumFractionDigits?: number) {
    return parseFloat(formatUnits(amount, decimals)).toLocaleString("en-US", {
        maximumFractionDigits: maximumFractionDigits ?? 3,
        useGrouping: false,
    })
}
