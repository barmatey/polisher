import type {Prompt, PromptForm} from "./domain.ts";

export interface PromptService {
    getAll: () => Promise<Prompt[]>
    createOne: (data: PromptForm) => Promise<Prompt>
    deleteOne: (targetId: string) => Promise<void>
    updateHotkey: (targetId: string, hotkey: string | null) => Promise<Prompt[]>
    updateOne: (targetId: string, data: PromptForm) => Promise<Prompt>
}

const prompts: Prompt[] = [
    {
        id: '1',
        title: "Laconic",
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
    async function getAll(): Promise<Prompt[]> {
        return structuredClone(prompts)
    }

    async function createOne(data: PromptForm): Promise<Prompt> {
        const created: Prompt = {
            id: String(prompts.length),
            title: data.title,
            role: "system",
            text: data.text,
            userId: "",
            order: 10,
            hotkey: null,
            replacement: {...data.replacement},
        }
        prompts.push(created)
        return structuredClone(created)
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

    async function updateOne(targetId: string, data: PromptForm): Promise<Prompt> {
        for (let prompt of prompts) {
            if (prompt.id === targetId) {
                prompt.hotkey = data.hotkey
                prompt.title = data.title
                prompt.text = data.text
                prompt.replacement = {...data.replacement}
                return structuredClone(prompt)
            }
        }
        throw Error("LookupError")
    }

    async function deleteOne(targetId: string) {
        const targetIndex = prompts.findIndex(prompt => prompt.id === targetId)
        prompts.splice(targetIndex, 1)
    }

    return {getAll, updateHotkey, updateOne, createOne, deleteOne}
}