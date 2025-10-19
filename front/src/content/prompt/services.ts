import type {Prompt} from "./domain.ts";

export interface PromptService {
    getAllImprovePrompts: () => Promise<Prompt[]>
    getAllTranslatePrompts: () => Promise<Prompt[]>
}

export function getPromptService(): PromptService {
    async function getAllImprovePrompts(): Promise<Prompt[]> {
        return [
            {
                id: '1',
                title: "Laconic",
                category: "improve",
                role: "system",
                text: 'Any prompt text',
                userId: '-1',
                order: 1,
                hotkey: 'Ctrl+M',
            },
            {
                id: '2',
                title: "Churchill",
                category: "improve",
                role: "system",
                text: 'Any prompt text',
                userId: '-1',
                order: 2,
                hotkey: 'Ctrl+O',
            },
        ]
    }

    async function getAllTranslatePrompts(): Promise<Prompt[]> {
        return []
    }

    return {getAllImprovePrompts, getAllTranslatePrompts}
}