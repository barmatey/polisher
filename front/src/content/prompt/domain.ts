export interface Prompt {
    id: string
    category: string
    role: "system" | "user"
    text: string
    userId: string
    order: number
    hotkey: string
}