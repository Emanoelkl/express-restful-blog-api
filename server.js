const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const blogPostRoutes = require("./routes/blogPosts");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/blogposts", blogPostRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server running in PORT: ${process.env.PORT}`);
});
