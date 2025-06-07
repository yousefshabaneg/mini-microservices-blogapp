const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/events", async (req, res) => {
  const { data, type } = req.body;

  if (type === "CommentCreated") {
    const status = data.content?.includes("orange") ? "rejected" : "approved";
    data.status = status;

    await axios.post("http://event-bus-srv:4005/events", {
      type: "CommentModerated",
      data,
    });
  }

  res.json({});
});

const PORT = 4003;
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
