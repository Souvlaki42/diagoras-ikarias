import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex h-full items-center justify-center align-middle text-new-white">
			<div className="text-center">
				<h1 className="mb-4 text-6xl font-bold">404</h1>
				<p className="mb-8 text-2xl">Page Not Found</p>
				<Link
					href="/"
					className="inline-block rounded-md bg-secondary px-6 py-2 text-new-white transition duration-300 hover:bg-active"
				>
					Go to Home
				</Link>
			</div>
		</main>
	);
}
