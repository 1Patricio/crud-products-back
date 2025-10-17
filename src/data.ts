import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Product } from "./models/ProductModel";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL!,
  synchronize: true, 
  logging: false,
  entities: [Product],
});