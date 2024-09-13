import { Hono } from "hono";
import { ExampleController } from "../Controller/Example.controller";

//server Class
const ExampleRouter = new Hono();

//routes
ExampleRouter.get("/", ExampleController);

export default ExampleRouter;
