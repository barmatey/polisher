import type {ZodObject, ZodRecord} from "zod";
import {fromError} from "zod-validation-error";


export function safeParsing<T>(parser: ZodObject<any> | ZodRecord, data: T): T {
    try {
        return parser.parse(data) as T
    } catch (err) {
        const validationError = fromError(err);
        console.error(validationError.toString());
        throw err
    }
}

export function safeArrayParsing<T>(parser: ZodObject<any>, data: T[]): T[] {
    return data.map(x => safeParsing(parser, x))
}