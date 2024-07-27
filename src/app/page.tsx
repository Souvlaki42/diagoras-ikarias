import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return (
		<main className="flex flex-col space-y-10 p-4 lg:flex-row lg:space-x-10 lg:space-y-0">
			<Image
				src="/coach.jpg"
				alt="Ο προπόνητης μας"
				width={464}
				height={506}
				priority
				className="mx-auto rounded-lg lg:mx-0"
			/>
			<div className="flex flex-col space-y-5 text-new-white lg:max-w-lg">
				<h1 className="text-3xl font-bold md:text-5xl">
					«Φέρνουμε τα παιδιά κοντά στο ποδόσφαιρο»
				</h1>
				<h2 className="text-xl font-semibold text-gray-400 md:text-2xl">
					Η προσπάθεια που γίνεται σε αυτή την απομακρυσμένη περιοχή της Ικαρίας έχει δομηθεί πάνω
					στο συλλογικό πνεύμα και τη φιλοσοφία της αλληλεγγύης!
				</h2>
				<p className="text-base md:text-xl">
					Η Ικαρία είναι θερινός προορισμός για ανθρώπους όχι μόνο από την υπόλοιπη Ελλάδα, αλλά από
					κάθε γωνιά του κόσμου. Περίφημα είναι τα πανηγύρια της, στα οποία χιλιάδες ανθρώπων
					σπεύδουν να τραγουδήσουν, να χορέψουν, να πιουν και, γενικώς, να μυηθούν σε μία εμπειρία,
					περιβόητη και μοναδική. Τι γίνεται, όμως, όταν οι μήνες της ξεγνοιασιάς περνούν, οι
					θερμοκρασίες πέφτουν και τα φώτα της νύχτας σβήνουν; Πίσω, στο όμορφο νησί του Ανατολικού
					Αιγαίου, μένουν οι ντόπιοι, οι άνθρωποι που ζουν τις ομορφιές, αλλά και τις δυσκολίες
					τους, οι άνθρωποι που δίνουν άνισες μάχες, για να βελτιώσουν τις συνθήκες διαβίωσης και,
					κυρίως, για να αφήσουν κάτι καλύτερο στα παιδιά τους.
				</p>
				<Link
					className="text-blue-500 hover:underline"
					href={"https://www.mikriliga.com/fernoyme-ta-paidia-konta-sto-podosfairo"}
				>
					Μάθετε περισσότερα...
				</Link>
			</div>
			<div className="flex flex-col space-y-5 text-new-white lg:max-w-lg">
				<h1 className="text-3xl font-bold lg:text-5xl">Ύμνος</h1>
				<h2 className="text-xl font-semibold text-gray-400 lg:text-2xl">
					αφιερωμένος εις τον εν Ράχες αθλητικόν όμιλον «
					<Link
						className="font-bold text-new-white hover:cursor-pointer"
						href={
							"https://el.wikipedia.org/wiki/%CE%94%CE%B9%CE%B1%CE%B3%CF%8C%CF%81%CE%B1%CF%82_%CE%BF_%CE%A1%CF%8C%CE%B4%CE%B9%CE%BF%CF%82"
						}
					>
						ΔΙΑΓΟΡΑΣ
					</Link>
					»
				</h2>
				<p className="text-base md:text-xl">
					Πνεύμα αθάνατον πηγής ενθέου <br />
					πούχης στο βλέμμα σου το φως της αστραπής <br />
					Συγκράτησέ μας στους αγώνας του ωραίου <br />
					Και στην οδόν οδήγα μας της αρετής. <br />
					Ενθάρρινέ μας στον καλλίνικον αγώνα,
					<br />
					Της πάλης του πεντάθλου και της αντοχής.
					<br />
					Μ΄ ολόισιο το σώμα σαν κολώνα,
					<br />
					κ΄αδάμαστο το μένος της ψυχής.
					<br />
					Άυλο πνεύμα, αγνέ πατέρα,
					<br />
					Του μεγάλου, του ωραίου και του ευγενούς
					<br />
					Ανήψωσέ μας ψηλά στης νίκης τον αιθέρα,
					<br />
					και στήριξέ μας στους αγώνας τους τρανούς.
				</p>
				<small>Υπογραφή δυσανάγνωστη</small>
				<small>Ράχες, Αύγουστος 1935</small>
				<small className="text-xs">Από το αρχείο της οικογένειας Κανάγιου</small>
			</div>
		</main>
	);
}
