import express from "express";
import router from "./routes/index.router.ts";

const app = express();
const port = Number(Deno.env.get("PORT")) || 3000;

app.use(router)

app.listen(port, () => {
  console.log(`Listening on ${port} ...`);
});

