"use server";

import { env } from "@/lib/env";
import { z } from "zod";
import ky from "ky";

const { FB_PAGE_ID, FB_ACCESS_TOKEN } = env;

const facebookPageFeed = z.object({
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

export const getFacebookFeed = async (after: string = "") => {
	try {
		const feed = await ky
			.get(`https://graph.facebook.com/v20.0/${FB_PAGE_ID}/feed`, {
				searchParams: {
					access_token: FB_ACCESS_TOKEN,
					fields: "attachments{media},message,story,id,created_time,updated_time",
					limit: 4,
					after
				},
				next: { revalidate: 60 },
				timeout: 10000
			})
			.json();
		const parsedFeed = facebookPageFeed.parse(feed);
		return parsedFeed;
	} catch (error) {
		return { data: [], paging: { cursors: { after: "" } } };
	}
};
