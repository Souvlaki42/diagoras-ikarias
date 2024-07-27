import { z } from "zod";

const schema = z.object({
	FB_PAGE_ID: z.string().min(1, "Page ID is required!"),
	FB_ACCESS_TOKEN: z.string().min(1, "Access token is required!"),
	FB_VERIFY_TOKEN: z.string().min(1, "Verify token is required!")
});

export const env = schema.parse(process.env);

export type Env = z.infer<typeof schema>;
