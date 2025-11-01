import type {Prompt, PromptForm} from "./domain.ts";

export interface PromptService {
    getAllUserPrompts: () => Promise<Prompt[]>
    updateHotkey: (targetId: string, hotkey: string | null) => Promise<Prompt[]>
    updateOne: (targetId: string, data: PromptForm) => Promise<Prompt>
}

const prompts: Prompt[] = [
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

export function getPromptService(): PromptService {
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

    async function updateOne(targetId: string, data: PromptForm): Promise<Prompt[]> {
        for (let prompt of prompts) {
            if (prompt.id === targetId) {
                prompt.hotkey = data.hotkey
                prompt.title = data.title
                prompt.text = data.text
                prompt.replacement = {...data.replacement}
                return structuredClone(prompt)
            }
        }
    }

    return {getAllUserPrompts, updateHotkey, updateOne}
}