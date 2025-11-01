import type {Prompt} from "./domain.ts";

export interface PromptService {
    getAllUserPrompts: () => Promise<Prompt[]>
    updateHotkey: (targetId: string, hotkey: string | null) => Promise<Prompt[]>
}

export function getPromptService(): PromptService {
    const prompts = [
        {
            id: '1',
            title: "Laconic",
            category: "improve",
            role: "system",
            text: 'Any prompt text',
            userId: '-1',
            order: 1,
            hotkey: 'Ctrl+M',
            replacement: {
                id: "1",
                code: "inplace",
                title: "Inplace",
            }
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
            replacement: {
                id: "1",
                code: "inplace",
                title: "Inplace",
            }
        },
    ]

    async function getAllUserPrompts(): Promise<Prompt[]> {
        return structuredClone(prompts)
    }

    async function updateHotkey(targetId: string, hotkey: string | null): Promise<Prompt[]> {
        const result: Prompt[] = []
        for (let prompt of prompts) {
            if (prompt.id === targetId) {
                prompt.hotkey = hotkey
                result.push(structuredClone(prompt))
            } else if (prompt.hotkey === hotkey) {
                prompt.hotkey = null
                result.push(structuredClone(prompt))
            }
        }
        return result
    }

    return {getAllUserPrompts, updateHotkey}
}