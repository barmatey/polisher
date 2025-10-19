import type {Language, TranslateStrategy} from "./domain.ts";

interface LanguageService {
    getAll: () => Promise<Language[]>
}

export function getLanguageService(): LanguageService {
    async function getAll(): Promise<Language[]> {
        return [
            {
                code: "en",
                title: "English",
            },
            {
                code: "ru",
                title: "Russian",
            },
        ]
    }

    return {
        getAll,
    }
}


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