import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const POSTS: unknown[] = [];

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
