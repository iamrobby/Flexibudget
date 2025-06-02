export function calculatePercentage(amount: number, percentage: number): number {
    return (amount * percentage) / 100;
}

export function roundToTwoDecimalPlaces(value: number): number {
    return Math.round(value * 100) / 100;
}