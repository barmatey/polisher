import type {Prompt} from "./domain.ts";

export interface PromptService {
    getAllUserPrompts: () => Promise<Prompt[]>
}

export function getPromptService(): PromptService {
    async function getAllUserPrompts(): Promise<Prompt[]> {
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
    }

    return {getAllUserPrompts}
}