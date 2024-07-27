import { formatDate } from "@/lib/date";
import { getFacebookFeed } from "@/lib/facebook";
import NextVideo from "next-video";
import Image from "next/image";

export default async function NewsPage() {
	const feed = await getFacebookFeed();

	const sortedFeed = feed.data.sort((a, b) => {
		return new Date(b.updated_time).getTime() - new Date(a.updated_time).getTime();
	});

	console.log(sortedFeed[0]);

	return (
		<main className="flex flex-col items-center space-y-8 p-4">
			{sortedFeed.map((post) => (
				<div
					key={post.id}
					className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white p-4 shadow-md"
				>
					{post.attachments?.data.map((attachment, index) => (
						<div key={index} className="mb-4">
							{attachment.media.source ? (
								<NextVideo src={attachment.media.source}></NextVideo>
							) : (
								<Image
									src={attachment.media.image.src}
									alt={post.message || post.story || "Facebook post"}
									width={attachment.media.image.width}
									height={attachment.media.image.height}
									className="h-auto w-full rounded object-cover"
								/>
							)}
						</div>
					))}
					<div>
						<h1 className="mb-2 text-lg text-gray-800">{post.message || post.story}</h1>
						<p className="text-sm text-gray-500">Ανανεώθηκε: {formatDate(post.updated_time)}</p>
					</div>
				</div>
			))}
		</main>
	);
}
