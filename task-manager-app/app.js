const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const app = express();
require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();

/*
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});
app.get("/api/v1/tasks", (req, res) => {
  res.send("get all tasks");
});
app.post("/api/v1/tasks", (req, res) => {
  res.json({ name: "create a task", data: req.body });
});
app.get("/api/v1/tasks/:id", (req, res) => {
  res.json({ id: req.params.id, name: "get a task" });
});
app.patch("/api/v1/tasks/:id", (req, res) => {
  res.json({ id: req.params.id, name: "update a task" });
});
app.delete("/api/v1/tasks/:id", (req, res) => {
  res.json({ id: req.params.id, name: "delete a task" });
}); 
*/
