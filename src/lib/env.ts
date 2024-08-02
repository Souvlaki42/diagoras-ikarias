import { z } from "zod";

const envSchema = z.object({
	FB_PAGE_ID: z.string().min(1, "Facebook page ID is required!"),
	FB_ACCESS_TOKEN: z.string().min(1, "Facebook access token is required!"),
	RESEND_API_KEY: z.string().min(1, "Resend API key is required!"),
	RESEND_FROM_EMAIL: z.string().min(1, "Resend from email is required!"),
	RESEND_TO_EMAIL: z.string().min(1, "Resend to email is required!")
});

export const env = envSchema.parse(process.env);

export type Env = z.infer<typeof envSchema>;
