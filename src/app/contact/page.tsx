import { ContactForm } from "@/components/ContactForm";
import { HouseIcon, MailIcon, PhoneIcon } from "lucide-react";

const MAP_SOURCE =
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30073.962178494374!2d26.087544278470315!3d37.59896111239748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bd1fc919651877%3A0xf6e0c629d68d1be1!2zzpPOrs-AzrXOtM6_IM6RzrPOr86_z4UgzpTOt868zrfPhM-Bzq_Ov8-FLCDOvM6_zr3Ov8-AzqzPhM65IM6dzrHPgiwgQWcuIERpbWl0cmlvcyA4MzMgMDE!5e0!3m2!1sen!2sgr!4v1722020982418!5m2!1sen!2sgr";

export default function ContactPage() {
	return (
		<main className="flex flex-col justify-center space-x-10 p-4 align-middle lg:flex-row">
			<section className="flex flex-col">
				<h1 className="m-2 text-center text-2xl text-new-white underline">Στείλτε ένα μήνυμα</h1>
				<ContactForm></ContactForm>
			</section>
			<section className="flex flex-col">
				<h1 className="m-2 text-center text-2xl text-new-white underline">Δείτε μας στον χάρτη</h1>
				<iframe
					src={MAP_SOURCE}
					width="400"
					height="300"
					className="border-0"
					allowFullScreen={false}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</section>
			<section className="flex flex-col">
				<h1 className="m-2 text-center text-2xl text-new-white underline">Άλλοι τρόποι</h1>
				<ul className="space-y-5">
					<li className="flex gap-2 text-center align-middle text-new-white">
						<HouseIcon /> ΑΓ. Δημήτριος Ραχών Γήπεδο, 83301
					</li>
					<li className="flex gap-2 text-center align-middle text-new-white">
						<MailIcon /> ags.diagoras.ikaria@gmail.com
					</li>
					<li className="flex gap-2 text-center align-middle text-new-white">
						<PhoneIcon /> 2275071232
					</li>
				</ul>
			</section>
		</main>
	);
}
