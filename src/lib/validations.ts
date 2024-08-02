import { z } from "zod";

export const contactFormSchema = z.object({
	name: z.string().optional(),
	email: z.string().email({ message: "Λάθος διεύθυνση email" }),
	message: z.string().min(1, { message: "Το μήνυμα είναι υποχρεωτικό" })
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const facebookPageFeed = z.object({
	data: z.array(
		z.object({
			attachments: z
				.object({
					data: z.array(
						z.object({
							media: z.object({
								image: z.object({
									height: z.number(),
									src: z.string(),
									width: z.number()
								}),
								source: z.string().optional()
							})
						})
					)
				})
				.optional(),
			created_time: z.string(),
			updated_time: z.string(),
			message: z.string().optional(),
			story: z.string().optional(),
			id: z.string()
		})
	),
	paging: z.object({
		cursors: z.object({
			before: z.string(),
			after: z.string()
		})
	})
});

export type FacebookPageFeed = z.infer<typeof facebookPageFeed>;
