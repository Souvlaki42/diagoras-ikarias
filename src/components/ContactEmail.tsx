import { ContactFormValues } from "@/lib/validations";
import {
	Body,
	Column,
	Container,
	Head,
	Html,
	Preview,
	Row,
	Section,
	Text
} from "@react-email/components";

export const ContactEmail = ({ name, email, message }: ContactFormValues) => {
	return (
		<Html>
			<Head />
			<Preview>Υποβολή φόρμας επικοινωνίας</Preview>
			<Body style={main}>
				<Container>
					<Section style={content}>
						<Row style={{ ...boxInfos, paddingBottom: "0" }}>
							<Column>
								<Text style={paragraph}>
									<b>Όνομα:</b> {name}
								</Text>
								<Text style={{ ...paragraph, marginTop: -5 }}>
									<b>Email:</b> {email}
								</Text>
								<Text style={paragraph}>
									<b>Μήνυμα:</b>
								</Text>
								<Text
									style={{
										borderLeft: "4px solid #0056b3",
										paddingLeft: "10px",
										marginLeft: 0
									}}
								>
									{message}
								</Text>
							</Column>
						</Row>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

const main = {
	backgroundColor: "#fff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};

const paragraph = {
	fontSize: 16
};

const content = {
	border: "1px solid rgb(0,0,0, 0.1)",
	borderRadius: "3px",
	overflow: "hidden"
};

const boxInfos = {
	padding: "20px"
};
