"use client";

import { sendContactFormEmail } from "@/lib/actions";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting }
	} = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema)
	});

	const onSubmit = async (values: ContactFormValues) => {
		const result = await sendContactFormEmail(values);
		if (!result.error) {
			reset();
			toast.success("Το μύνημα στάλθηκε με επιτυχία.");
		} else {
			toast.error("Κάτι πήγε στραβά. Δοκιμάστε ξανά.");
		}
		return result;
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="mx-auto max-w-md rounded-md bg-secondary p-4 shadow-md"
		>
			<div className="mb-4">
				<label htmlFor="name" className="block text-sm font-medium text-gray-300">
					Όνομα
				</label>
				<input
					id="name"
					type="text"
					{...register("name")}
					className="mt-1 w-full rounded-md border border-gray-300 p-2"
				/>
				{errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
			</div>

			<div className="mb-4">
				<label htmlFor="email" className="block text-sm font-medium text-gray-300">
					Email
				</label>
				<input
					id="email"
					type="email"
					{...register("email")}
					className="mt-1 w-full rounded-md border border-gray-300 p-2"
				/>
				{errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
			</div>

			<div className="mb-4">
				<label htmlFor="message" className="block text-sm font-medium text-gray-300">
					Μήνυμα
				</label>
				<textarea
					id="message"
					{...register("message")}
					className="mt-1 w-full rounded-md border border-gray-300 p-2"
				/>
				{errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
			</div>

			<button
				type="submit"
				className="w-full rounded-md bg-primary p-2 text-new-white hover:bg-active"
				disabled={isSubmitting}
			>
				<div className="flex flex-row justify-center text-center align-middle text-xl">
					{isSubmitting && <Loader2Icon className="mr-1 w-8 animate-spin" />} Send
				</div>
			</button>
		</form>
	);
};
