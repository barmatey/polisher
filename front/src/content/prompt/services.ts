import type {Prompt} from "../improve/domain.ts";
import type {TranslateStrategy} from "../translate/domain.ts";

export interface PromptService {
    getAllImprovePrompts: () => Promise<Prompt[]>
    getAllTranslatePrompts: () => Promise<Prompt[]>
}

export function getPromptService(): PromptService {
    async function getAllImprovePrompts(): Promise<Prompt[]> {
        return [
            {
                title: "Laconic",
                code: "laconic",
            },
            {
                title: "As Churchill",
                code: "churchill",
            }
        ]
    }

    async function getAllTranslatePrompts(): Promise<TranslateStrategy[]> {
        return [
            {
                code: "native",
                title: "Native",
            },
            {
                code: "original",
                title: "Original",
            },
        ]
    }

    return {getAllImprovePrompts, getAllTranslatePrompts}
}