import type {Language} from "./domain.ts";

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