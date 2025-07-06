
import express from "express";
import {eventRoute} from "./routes/eventRoutes";

const app = express();
app.use(express.json());

app.use("/events", eventRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
