const express = require("express");
const app = express();

app.use(express.json());

// Routes
const bookRoutes = require("./src/routes/bookRoutes");
app.use("/books", bookRoutes);

// 👇 Add this route for homepage
app.get("/", (req, res) => {
  res.send("📚 Book API is running!");
});

// Start server
app.listen(3000, () => {
    console.log("🚀 Server is running on http://localhost:3000");
});
