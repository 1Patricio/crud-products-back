import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/ProductRoute";
import cors from "cors";


dotenv.config();

const app = express();
app.use(cors());

app.use(cors({
  origin: ["http://localhost:5173",
    "cool-test-products.netlify.app/"]
}));
app.use(express.json());

app.use("/products", productRoutes);

export default app;