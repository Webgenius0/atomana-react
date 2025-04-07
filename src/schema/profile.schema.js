import { z } from 'zod';

// Define the Zod schema for validation
export const profileSchema = z.object({
  address: z
    .string()
    .max(100, 'Address must be less than 100 characters')
    .optional(),
  email: z.string().optional(),
  bio: z.string().max(100).optional(),
  phone: z.string().optional(),
  date_of_birth: z.string().optional(),
  facebook: z
    .string()
    .refine((value) => !value || z.string().url().safeParse(value).success, {
      message: 'Invalid URL format',
    })
    .optional(),
  instagram: z
    .string()
    .refine((value) => !value || z.string().url().safeParse(value).success, {
      message: 'Invalid URL format',
    })
    .optional(),
  twitter: z
    .string()
    .refine((value) => !value || z.string().url().safeParse(value).success, {
      message: 'Invalid URL format',
    })
    .optional(),
});
