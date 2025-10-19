import type {TranslateStrategy} from "./domain.ts";


interface TranslateStrategyService {
    getAll: () => Promise<TranslateStrategy[]>
}

export function getTranslateStrategyService(): TranslateStrategyService {
    async function getAll(): Promise<TranslateStrategy[]> {
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

    return {
        getAll,
    }
}