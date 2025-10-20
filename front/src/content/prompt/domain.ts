import type {Replacement} from "../replacement/domain.ts";

export interface Prompt {
    id: string
    title: string
    category: "translate" | "improve"
    role: "system" | "user"
    text: string
    userId: string
    order: number
    hotkey: string | null
    replacement: Replacement
}

export interface PromptForm {
    title: string
    text: string
    hotkey: string | null
    replacement: Replacement
}