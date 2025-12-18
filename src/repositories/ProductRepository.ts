import { AppDataSource } from "../data";
import { Product } from "../models/ProductModel";

export const ProductRepository = AppDataSource.getRepository(Product);