const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./database/db");
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes middleware
app.use("/api/auth/", authRoutes);
app.use("/api/category", categoryRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("inside server");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
