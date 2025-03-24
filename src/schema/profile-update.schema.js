import { z } from "zod";

// Define the Zod schema for validation
export const addressSchema = z.object({
  address: z.string().min(1, 'Address is required').max(100, 'Address must be less than 100 characters').optional(),
  bio: z.string().min(1, 'Bio is required.').optional()
});


