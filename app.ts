import express from "express";
import authRouter from "./router/auth";

const app = express();
const port = 8080;

app.use(express.json());

app.use("/auth", authRouter);

// app.get("/", (req, res) => {
//   console.log(req);
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
