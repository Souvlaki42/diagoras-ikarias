import ky from "ky";
import { env } from "./env";

const { FB_PAGE_ID, FB_ACCESS_TOKEN } = env;

type FacebookPageFeed = {
	data: {
		attachments?: {
			data: {
				media: {
					image: {
						height: number;
						src: string;
						width: number;
					};
					source?: string;
				};
			}[];
		};
		created_time: string;
		updated_time: string;
		message?: string;
		story?: string;
		id: number;
	}[];
	paging: {
		cursors: {
			before: string;
			after: string;
		};
	};
};

export const getFacebookFeed = async () => {
	const feed = await facebookPage
		.get("feed", {
			searchParams: {
				fields: "attachments{media},message,story,id,created_time,updated_time"
			}
		})
		.json<FacebookPageFeed>();
	return feed;
};

const facebookPage = ky.create({
	prefixUrl: `https://graph.facebook.com/v20.0/${FB_PAGE_ID}`,
	searchParams: { access_token: FB_ACCESS_TOKEN },
	timeout: 10000,
	retry: {
		limit: 10,
		methods: ["GET", "POST"],
		backoffLimit: 3000
	}
});
