export interface Prompt {
    id: string
    title: string
    category: "translate" | "improve"
    role: "system" | "user"
    text: string
    userId: string
    order: number
    hotkey: string
}