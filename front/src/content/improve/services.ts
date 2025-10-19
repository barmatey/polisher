import type {Improve} from "./domain.ts";

export interface ImproveService {
    getAll: () => Promise<Improve[]>
}

export function getImproveService(): ImproveService {
    async function getAll(): Promise<Improve[]> {
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

    return {getAll}
}