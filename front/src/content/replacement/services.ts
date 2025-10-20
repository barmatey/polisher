import type {Replacement} from "./domain.ts";

export interface ReplacementService {
    getAll: () => Promise<Replacement[]>
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
                code: "after",
                title: "Append",
            }
        ]
    }

    return {getAll}
}