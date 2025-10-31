import type {Prompt} from "../../domain.ts";
import type {Mode} from "../../../shared/types.ts";

export interface ImproveContext {
    prompts: Prompt[]
    updateTarget: Prompt | null
    mode: Mode
}