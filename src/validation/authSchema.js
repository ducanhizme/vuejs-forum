import * as zod from 'zod';
import {emailSchema, loginPasswordSchema, registerPassword} from "@/validation/scheme.js";

export const registerSchema = zod
    .object({
        name: zod.string().min(3, {message: 'Username must have at least 3 character'}),
        email: emailSchema,
        password: registerPassword,
        confirmPassword: zod.string(),
    }).refine(
        (values) => {
            return values.password === values.confirmPassword;
        },
        {
            message: "Passwords must match!",
            path: ["confirmPassword"],
        }
    );
export const loginSchema = zod
    .object({
        email: emailSchema,
        password: loginPasswordSchema,
        confirmPassword: zod.string(),
    })
