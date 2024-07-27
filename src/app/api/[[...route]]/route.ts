import { env } from "@/lib/env";
import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
	return c.json({
		message: "Hello Next.js!"
	});
});

app.post("/webhook", async (c) => {
	const data = await c.req.json();
	console.log("Webhook event data:", data);
	return c.json({ status: "Received" });
});

app.get("/webhook", async (c) => {
	const mode = c.req.query("hub.mode");
	const token = c.req.query("hub.verify_token");
	const challenge = c.req.query("hub.challenge");

	if (mode && token) {
		if (mode === "subscribe" && challenge && token === env.FB_VERIFY_TOKEN) {
			console.log("WEBHOOK_VERIFIED");
			return c.text(challenge, 200);
		} else {
			return c.text("Unauthorized", 403);
		}
	} else {
		return c.text("Server Error", 500);
	}
});

export const GET = handle(app);
export const POST = handle(app);
