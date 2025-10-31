import {z} from "zod";

export const authUserValidator = z.object({
    id: z.string(),
    email: z.string(),
}).strict()

export const emailUpdateValidator = z.object({
    email: z.string().email({message: "Invalid email format"}),
    password: z.string(),
}).strict()

export const emailValidator = z.object({
    email: z.string().email({message: "Invalid email format"})
}).strict()

export const passwordUpdateValidator = z.object({
    oldPassword: z.string(),
    newPassword: z.string().min(6),
    repeatPassword: z.string(),
})
    .strict()
    .refine((data) => data.newPassword === data.repeatPassword, {
        message: "auth.error.passwordsNotMatch",
        path: ["repeatPassword"], // Ошибка будет привязана к этому полю
    })


export const registerDataValidator = z.object({
    email: z.string().email({message: "auth.error.badEmail"}),
    password: z.string().min(6, {message:"auth.error.passwordTooShort"}),
    repeat: z.string(),
})
    .strict()
    .refine((data) => data.password === data.repeat, {
        message: "auth.error.passwordsNotMatch",
        path: ["repeat"], // Ошибка будет привязана к этому полю
    })

export const resetPasswordDataValidator = z.object({
    newPassword: z.string().min(6),
    repeatPassword: z.string(),
    token: z.string(),
})
    .strict()
    .refine((data) => data.newPassword === data.repeatPassword, {
        message: "auth.error.passwordsNotMatch",
        path: ["repeatPassword"], // Ошибка будет привязана к этому полю
    })