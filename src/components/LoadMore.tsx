"use client";

import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Feed } from "./Feed";
import { type FacebookPageFeed, getFacebookFeed } from "@/lib/feed";

export const LoadMore = ({ after }: { after: string }) => {
	const [feed, setFeed] = useState<FacebookPageFeed["data"]>([]);
	const [nextPage, setNextPage] = useState<string>(after);

	const { ref, inView } = useInView();

	const thereAreMoreData = () => feed.length === 0;

	const loadMoreData = async () => {
		const newFeed = await getFacebookFeed(nextPage);
		setFeed((prev) => [...prev, ...newFeed.data]);
		setNextPage(newFeed.paging.cursors.after);
	};

	useEffect(() => {
		if (inView && thereAreMoreData()) loadMoreData();
	}, [inView, nextPage]);

	return (
		<>
			<Feed data={feed} />
			{thereAreMoreData() && (
				<Loader2Icon ref={thereAreMoreData() ? ref : undefined} className="animate-spin" />
			)}
		</>
	);
};
