"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
	name: z.string().optional(),
	email: z.string().email({ message: "Λάθος διεύθυνση email" }),
	message: z.string().min(1, { message: "Το μήνυμα είναι υποχρεωτικό" })
});

type FormValues = z.infer<typeof schema>;

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>({
		resolver: zodResolver(schema)
	});

	const onSubmit = (data: FormValues) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="mx-auto max-w-md rounded-md bg-white p-4 shadow-md"
		>
			<div className="mb-4">
				<label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
				<label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
				<label htmlFor="message" className="block text-sm font-medium text-gray-700">
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
			>
				Send
			</button>
		</form>
	);
};
