import { Hono } from "hono";
import ExampleRouter from "./Router/Example.router";

//server Class
export const server = new Hono();

//routes
server.route("/example", ExampleRouter);

//start server
Bun.serve({
  fetch: server.fetch,
  port: process.env.PORT,
  hostname: "localhost",
});

console.log(`Server running on http://localhost:${process.env.PORT}`);
