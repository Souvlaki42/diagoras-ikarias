import { FacebookPageFeed } from "@/app/api/feed/route";
import { type ClassValue, clsx } from "clsx";
import ky from "ky";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export function getBaseUrl() {
	return (
		process.env.NEXT_PUBLIC_SITE_URL ??
		process.env.NEXT_PUBLIC_VERCEL_URL ??
		"http://localhost:3000"
	);
}

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getFacebookFeed = async (after?: string) => {
	try {
		const feed = await ky
			.get("feed", {
				searchParams: { after: after ?? "" },
				prefixUrl: `${getBaseUrl()}/api`
			})
			.json<FacebookPageFeed>();
		return feed;
	} catch (error) {
		return { data: [], paging: { cursors: { after: "no-more-data" } } };
	}
};
