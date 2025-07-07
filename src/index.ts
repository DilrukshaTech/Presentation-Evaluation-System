
import express from "express";
import {eventRoute} from "./routes/eventRoutes";
import {sessionRoute } from "./routes/sessionRoutes";

const app = express();
app.use(express.json());
  
app.use("/events", eventRoute);
app.use("/sessions", sessionRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
