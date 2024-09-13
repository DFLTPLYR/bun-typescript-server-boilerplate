import { Hono } from "hono";
import {
  ExampleController,
  ExampleRequestBody,
} from "../Controller/Example.controller";

//server Class
const ExampleRouter = new Hono();

//routes
ExampleRouter.get("/", ExampleController);
ExampleRouter.post("/", ExampleRequestBody);

export default ExampleRouter;
