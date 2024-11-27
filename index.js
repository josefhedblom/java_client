// Importera Express
const express = require("express");
const app = express();
const port = 3060;

// Skapa en enkel route
app.get("/", (req, res) => {
  res.send("Hello, World! Server is running on port 3060");
});

// Starta servern på port 3060
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
