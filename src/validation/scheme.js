import * as zod from 'zod';
export const passwordValidations = {
    min: (password) => password.length >= 8,
    max: (password) => password.length <= 20,
    uppercase: (password) => /[A-Z]/.test(password),
    lowercase: (password) => /[a-z]/.test(password),
    number: (password) => /[0-9]/.test(password),
    specialChar: (password) => /[!@#$%^&*]/.test(password),
};

export const passwordMessages = {
    min: 'Password must have at least 8 characters',
    max: 'Password must have maximum 20 characters',
    uppercase: 'Password must have at least one uppercase letter',
    lowercase: 'Password must have at least one lowercase letter',
    number: 'Password must have at least one number',
    specialChar: 'Password must have at least one special character',
};

export const registerPassword = zod
    .string()
    .min(8, { message: passwordMessages.min })
    .max(20, { message: passwordMessages.max })
    .refine(passwordValidations.uppercase, { message: passwordMessages.uppercase })
    .refine(passwordValidations.lowercase, { message: passwordMessages.lowercase })
    .refine(passwordValidations.number, { message: passwordMessages.number })
    .refine(passwordValidations.specialChar, { message: passwordMessages.specialChar });

export const loginPasswordSchema = zod
    .string()
    .min(8, { message: passwordMessages.min })
    .max(20, { message: passwordMessages.max });
export const emailSchema = zod.string().email({ message: 'Invalid email address' });
