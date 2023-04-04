const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const blogData = require("./Data/data.json");

app.get("/", (req, res) => {
  res.send("Api is Running");
});

app.listen(port, () => {
  console.log("Server is Running in port", port);
});

app.get("/blogs", (req, res) => {
  res.send(blogData);
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  const selectedblogs = blogData.find((blog) => blog._id === id);
  res.send(selectedblogs);
});
