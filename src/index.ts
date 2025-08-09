import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import mongodb from "./config/db";
import Cats_data from "./modal/catsmodal";

const app = new Elysia();
const PORT = 3000;

app.use(cors()); // allow all origins

app.get("/", () => "Hello from Elysia!");

app.get("/api", async () => {
  const catdata = await Cats_data.find().sort({ createdAt: -1 });
  return catdata;
});

app.post("/api/post", async ({ body }: { body: any }) => {
  if (!body?.name) {
    return { error: "Title is required" };
  }
  const { name, country } = body;
  const cats_data = new Cats_data({ name, country });
  await cats_data.save();
  return cats_data;
});

await mongodb();

app.listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}: http://localhost:${PORT}`
);

export default app.handle;
