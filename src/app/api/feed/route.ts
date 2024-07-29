import { NextRequest, NextResponse } from "next/server";

import ky from "ky";
import { env } from "@/lib/env";
import { z } from "zod";

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

const facebookPage = ky.create({
	prefixUrl: `https://graph.facebook.com/v20.0/${FB_PAGE_ID}`,
	searchParams: { access_token: FB_ACCESS_TOKEN },
	next: { revalidate: 60 },
	timeout: 10000,
	retry: {
		limit: 10,
		methods: ["GET", "POST"],
		backoffLimit: 3000
	}
});

export const GET = async (request: NextRequest) => {
	try {
		const searchParams = request.nextUrl.searchParams;
		const after = searchParams.get("after") ?? "";

		const feed = await facebookPage
			.get("feed", {
				searchParams: {
					fields: "attachments{media},message,story,id,created_time,updated_time",
					limit: 4,
					after
				}
			})
			.json<FacebookPageFeed>();

		const parsedFeed = facebookPageFeed.parse(feed);
		return NextResponse.json(parsedFeed, { status: 200 });
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
};
