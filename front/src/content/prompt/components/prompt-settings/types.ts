import type {Prompt} from "../../domain.ts";

export interface ImproveContext {
    prompts: Prompt[]
    updateTarget: Prompt | null
    mode: "read" | "update" | "create"
}