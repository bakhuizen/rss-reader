const express = require("express");
const PORT = process.env.port || 3001;
const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "This is your server speaking!" });
  });

app.listen(PORT, () => {
    console.log("Server is listening on port", PORT)
});