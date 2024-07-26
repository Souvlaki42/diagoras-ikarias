"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{ name: "Αρχικη", href: "/" },
	{ name: "Νεα", href: "/news" },
	{ name: "Ομαδα", href: "/team" },
	{ name: "Επικοινωνια", href: "/contact" },
	{ name: "Δωρεες", href: "/donations" }
];

export const Header = () => {
	const pathName = usePathname();
	return (
		<header>
			<div className="flex items-center justify-center">
				<Image
					className="relative"
					src="/header.png"
					alt="Πρώτα μέλη της ομάδας"
					width={2000}
					height={254}
				></Image>
				<Link href="/" className="hidden hover:opacity-90 lg:absolute lg:block">
					<Image src={"/logo.png"} alt="Λογότυπο της ομάδας" width={115} height={150}></Image>
				</Link>
			</div>
			<nav className="bg-secondary text-base text-new-white lg:text-xl">
				<ul className="flex list-none flex-row justify-center uppercase">
					{navLinks.map((link) => {
						const isActive =
							pathName === link.href || (link.href !== "/" && pathName.startsWith(link.href));
						return (
							<li
								className={cn("group p-2 hover:cursor-pointer", isActive ? "text-active" : "")}
								key={link.name}
							>
								<Link className="relative" href={link.href}>
									<span className="absolute bottom-0 left-0 block h-0.5 w-0 bg-new-white text-center transition-all duration-300 group-hover:w-full"></span>
									{link.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};
