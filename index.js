const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const dbConnect = require("./config/db/dbConnection");
const todoRouter = require("./router/todeRouter");

dotenv.config();

const app = express();

dbConnect();

app.use(express.json());
app.use(cors());

app.use("/api/todo", todoRouter);

const port = process.env.PORT || 5000;
app.listen(port, console.log("server started"));
