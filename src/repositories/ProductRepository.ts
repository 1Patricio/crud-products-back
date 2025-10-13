import { AppDataSource } from "../data";
import { Product } from "../models/ProductModel";
import { Repository } from "typeorm";

export const ProductRepository = AppDataSource.getRepository(Product);
