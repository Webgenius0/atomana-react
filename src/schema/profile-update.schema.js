import { z } from "zod";

// Define the Zod schema for validation
export const addressSchema = z.object({
  address: z.string().max(100, 'Address must be less than 100 characters').optional(),
  email: z.string().optional(),
  bio: z.string().max(100) .optional(),
  phone: z.string().optional(),
  birthday: z.string().optional(),
});


