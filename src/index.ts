
import express from "express";
import {eventRoute} from "./routes/eventRoutes";
import {sessionRoute } from "./routes/sessionRoutes";
import { judgeRoute } from "./routes/judgeRoutes";
import { judgeSessionRoute } from "./routes/judgeSessionRoute";
import { memberRoute } from "./routes/memberRoutes";
import { presenterRoute } from "./routes/presenterRoutes";

const app = express();
app.use(express.json());
  
app.use("/events", eventRoute);
app.use("/sessions", sessionRoute);
app.use("/judges", judgeRoute);
app.use("/sessionjudges",judgeSessionRoute);
app.use("/members", memberRoute);
app.use("/presenters", presenterRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
