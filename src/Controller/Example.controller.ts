import type { Context } from "hono";

// sample Api
export async function ExampleController(c: Context) {
  return c.json({ message: "Hello, World!" });
}

export async function ExampleRequestBody(c: Context) {
  //get body
  const body = await c.req.json();

  //destructured body
  const { req, name } = body;
  return c.json({ message: "Hello, World!", req, name });
}
