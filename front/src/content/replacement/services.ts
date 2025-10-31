import type {Replacement} from "./domain.ts";

export interface ReplacementService {
    getAll: () => Promise<Replacement[]>
    getBaseReplacement: () => Replacement
}

export function getReplacementService(): ReplacementService {
    async function getAll(): Promise<Replacement[]> {
        return [
            {
                id: "1",
                code: "inplace",
                title: "Inplace"
            },
            {
                id: "2",
                code: "append",
                title: "Append",
            },
            {
                id: "3",
                code: "window",
                title: "Window",
            }
        ]
    }

    function getBaseReplacement() {
        return {
            id: "1",
            code: "inplace",
            title: "Inplace"
        }
    }

    return {getAll, getBaseReplacement}
}