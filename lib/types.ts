import { z } from "zod";

export const BookSchema = z.object({
  id: z.string().min(3).max(100),
  isbn: z.string().min(10).max(13),
  title: z.string().min(2).max(100),
  author: z.string().min(2).max(100),
  genre: z.string().min(2).max(100),
  publisher: z.string().min(2).max(100),
  year: z.string().min(4).max(4),
  copies: z.number().min(0),
  available: z.number().min(0),
  status: z.enum(["Available", "Out of Stock", "Low Stock"]),
});

export type BookArrayParsed = z.infer<z.ZodArray<typeof BookSchema>>;
