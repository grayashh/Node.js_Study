import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import path from "path";

const app = express();

const __dirname = path.resolve();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
