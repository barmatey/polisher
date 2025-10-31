export interface PlanInfo {
    title: string
    code: string
    price: number
    currency: string
    description: string | null
}

export interface Usage {
    title: string
    code: string
    currentValue: number
    maxValue: number
}

export interface BillingInfo {
    lastBilling: Date
    nextBilling: Date
    cycle: string
}

export interface Balance {
    value: number
    currency: string
}

export interface Sub {
    id: string
    planInfo: PlanInfo
    billingInfo: BillingInfo
    balance: Balance
    externalId: string
}

export interface Plan {
    planInfo: PlanInfo
}