import type {Sub} from "./domain.ts";

export interface SubService {
    getMySub: () => Promise<Sub>
}

export function getSubService(): SubService {
    async function getMySub(): Promise<Sub> {
        return {
            id: "1",
            planInfo: {
                price: 10,
                code: 'personal',
                title: "Personal"
            },
            billingInfo: {
                lastBilling: new Date(),
                newBillingDate: new Date(),
                cycle: "month",
            },
            balance: {
                currency: "USD",
                value: 34,
            },
        }
    }

    return {getMySub}
}