import type { Context } from "hono";

// sample Api
export async function ExampleController(c: Context) {
  return c.json({ message: "Hello, World!" });
}
