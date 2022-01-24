import { superoak } from "../deps.js";
import { app } from "../app.js";

Deno.test({
  name: "It's alive!",
  async fn() {
    const request = await superoak(app);
    await request.get("/").expect(200);
  },
  sanitizeResources: false,
  sanitizeOps: false,
});
