"use client";

import { FacebookPageFeed } from "@/app/api/feed/route";
import { formatDate } from "@/lib/date";
import Image from "next/image";

export const Feed = ({ data }: { data?: FacebookPageFeed["data"] }) => {
	const sortedFeed = data?.sort((a, b) => {
		return new Date(b.updated_time).getTime() - new Date(a.updated_time).getTime();
	});
	return (
		<>
			{sortedFeed?.map((post) => (
				<div
					key={post.id}
					className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white p-4 shadow-md"
				>
					{post.attachments?.data.map((attachment, index) => {
						return (
							<div key={index} className="mb-4">
								{attachment.media.source && (
									<video controls width="100%">
										<source src={attachment.media.source} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								)}
								{!attachment.media.source && (
									<Image
										src={decodeURI(attachment.media.image.src)}
										alt={post.message || post.story || "Facebook post"}
										width={attachment.media.image.width}
										height={attachment.media.image.height}
										className="h-auto w-full rounded object-cover"
									/>
								)}
							</div>
						);
					})}
					<div>
						<h1 className="mb-2 text-lg text-gray-800">{post.message || post.story}</h1>
						<p className="text-sm text-gray-500">Ενημερώθηκε: {formatDate(post.updated_time)}</p>
					</div>
				</div>
			))}
		</>
	);
};
