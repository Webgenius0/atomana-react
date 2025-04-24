import { isValidURL } from '@/lib/utils/isValidUrl';
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
    .transform((value) => {
      if (value) {
        return value?.startsWith('https://') || value?.startsWith('http://')
          ? value
          : `https://${value}`;
      } else {
        return value;
      }
    })
    .refine((value) => !value || isValidURL(value), {
      message: 'Invalid URL format',
    })
    .optional(),
  instagram: z
    .string()
    .transform((value) => {
      if (value) {
        return value?.startsWith('https://') || value?.startsWith('http://')
          ? value
          : `https://${value}`;
      } else {
        return value;
      }
    })
    .refine((value) => !value || isValidURL(value), {
      message: 'Invalid URL format',
    })
    .optional(),
  twitter: z
    .string()
    .transform((value) => {
      if (value) {
        return value?.startsWith('https://') || value?.startsWith('http://')
          ? value
          : `https://${value}`;
      } else {
        return value;
      }
    })
    .refine((value) => !value || isValidURL(value), {
      message: 'Invalid URL format',
    })
    .optional(),
});

// instagram: z
//     .string()
//     .transform((value) =>
//       value?.startsWith('https://') || value?.startsWith('http://')
//         ? value
//         : `https://${value}`
//     )
//     .refine((value) => !value || z.string().url().safeParse(value), {
//       message: 'Invalid URL format.',
//     }),
