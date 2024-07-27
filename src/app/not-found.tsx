import Link from "next/link";

export default function NotFound() {
	return (
		<main className="grid h-[70vh] place-items-center bg-primary p-4 text-new-white">
			<div className="mx-auto max-w-md text-center">
				<h1 className="mb-4 text-5xl font-bold sm:text-6xl">404</h1>
				<p className="mb-8 text-xl sm:text-2xl">Η σελίδα δεν βρέθηκε</p>
				<Link
					href="/"
					className="inline-block rounded-md bg-secondary px-6 py-2 text-new-white transition duration-300 hover:bg-active"
				>
					Πήγαινε στην αρχική
				</Link>
			</div>
		</main>
	);
}
