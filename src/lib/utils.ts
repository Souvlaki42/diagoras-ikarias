import { FacebookPageFeed } from "@/app/api/feed/route";
import { type ClassValue, clsx } from "clsx";
import ky from "ky";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export function getBaseUrl() {
	const production = process.env.NODE_ENV === "production";
	const test = process.env.NODE_ENV === "test";

	if (production || test) {
		return process.env.NEXT_PUBLIC_VERCEL_URL ?? "https://diagoras-ikarias.vercel.app";
	}

	return "http://localhost:3000";
}

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getFacebookFeed = async (after?: string) => {
	try {
		const feed = await ky
			.get("feed", {
				searchParams: { after: after ?? "" },
				prefixUrl: `diagoras-ikarias.vercel.app/api`
			})
			.json<FacebookPageFeed>();
		return feed;
	} catch (error) {
		return { data: [], paging: { cursors: { after: "no-more-data" } } };
	}
};
