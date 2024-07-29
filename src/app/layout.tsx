import NextTopLoader from "nextjs-toploader";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata: Metadata = {
	title: {
		template: "%s - Διαγόρας Ικαρίας",
		default: "Αρχική"
	},
	description: "Φέρνουμε τα παιδιά κοντά στο ποδόσφαιρο"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					roboto.className,
					"m-0 flex min-h-screen w-full flex-col justify-between bg-primary p-0"
				)}
			>
				<Header />
				<div className="flex-grow">
					<NextTopLoader />
					{children}
				</div>
				<footer className="flex justify-center py-4 text-new-white">
					© {new Date().getFullYear()} Διαγόρας Ικαρίας
				</footer>
			</body>
		</html>
	);
}
