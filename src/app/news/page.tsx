import { Feed } from "@/components/Feed";
import { LoadMore } from "@/components/LoadMore";
import { getFacebookFeed } from "@/lib/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Νέα"
};

export default async function NewsPage() {
	const feed = await getFacebookFeed();

	return (
		<main className="flex flex-col items-center space-y-8 p-4">
			<Feed data={feed.data} />
			<LoadMore after={feed.paging.cursors.after} />
		</main>
	);
}
