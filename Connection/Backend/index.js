import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server in holded");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      type: "comedy",
      content: "hahahahahha",
    },
    {
      id: 2,
      type: "comedy",
      content: "heeeeeeee",
    },
    {
      id: 3,
      type: "horror",
      content: "wooooh",
    },
    {
      id: 4,
      type: "triller",
      content: "pack your bags",
    },
    {
      id: 5,
      type: "horror",
      content: "payal",
    },
  ];

  res.send(jokes);
});

app.listen(3000, () => {
  console.log("server is running on 3000 port");
});
