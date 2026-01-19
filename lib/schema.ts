import { z } from "zod"

export const MAX_FILE_SIZE = 1024 * 1024 // 1MB

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  bname: z.string().min(1, "Business name is required"),
  phone: z
    .string()
    .min(8, "Phone must be at least 8 digits")
    .regex(/^[0-9()+-\s]+$/, "Invalid phone number"),
  email: z.email("Invalid email address"),
  message: z.string(),
  utm_source: z.string().optional(),
  utm_campaign: z.string().optional(),
  files: z
    .array(
      z
        .instanceof(File)
        .refine((file) => file.size <= MAX_FILE_SIZE, "File must be <= 1MB")
    )
    .optional(),
})

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>
