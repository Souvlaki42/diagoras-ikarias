"use server";

import { ContactEmail } from "@/components/ContactEmail";
import { type ContactFormValues, facebookPageFeed } from "@/lib/validations";
import DOMPurify from "isomorphic-dompurify";
import ky from "ky";
import { Resend } from "resend";
import { env } from "./env";

const { FB_PAGE_ID, FB_ACCESS_TOKEN, RESEND_API_KEY, RESEND_TO_EMAIL } = env;

export const getFacebookFeed = async (after: string = "") => {
	"use server";

	try {
		const feed = await ky
			.get(`https://graph.facebook.com/v20.0/${FB_PAGE_ID}/feed`, {
				searchParams: {
					access_token: FB_ACCESS_TOKEN,
					fields: "attachments{media},message,story,id,created_time,updated_time",
					limit: 4,
					after
				},
				next: { revalidate: 60 },
				timeout: 10000
			})
			.json();
		const parsedFeed = facebookPageFeed.parse(feed);
		return parsedFeed;
	} catch (error) {
		return { data: [], paging: { cursors: { after: "" } } };
	}
};

export const sendContactFormEmail = async ({ name, email, message }: ContactFormValues) => {
	"use server";

	const resend = new Resend(RESEND_API_KEY);

	const sanitizedMessage = DOMPurify.sanitize(message);
	const sanitizedEmail = DOMPurify.sanitize(email);
	const sanitizedName = name ? DOMPurify.sanitize(name) : "Ανώνυμος";

	const { data, error } = await resend.emails.send({
		from: `Contact <${env.RESEND_FROM_EMAIL}>`,
		to: [env.RESEND_TO_EMAIL],
		subject: "Επικοινωνία με τον Διαγόρα",
		react: ContactEmail({ name: sanitizedName, email: sanitizedEmail, message: sanitizedMessage })
	});

	if (data) console.log(data);
	if (error) console.error(error);
	return { data, error };
};
