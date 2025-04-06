import { z } from "zod";

// Define the Zod schema for validation
export const addressSchema = z.object({
  address: z.string().max(100, 'Address must be less than 100 characters').optional(),
  email: z.string().email('Invalid email format').optional(),
  bio: z.string().max(100, 'Bio must be less than 100 characters').optional(),
  phone: z.string().optional(),
  date_of_birth: z.string()
    .regex(/^\d{2}-\d{2}-\d{4}$/, 'Date must be in MM-DD-YYYY format')
    .optional(),
});