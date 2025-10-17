import { ProductRepository } from "../repositories/ProductRepository";
import { Product } from "../models/ProductModel";

export const ProductService = {
  async list(): Promise<Product[]> {
    return ProductRepository.find();
  },

  async get(id: string): Promise<Product> {
    const product = await ProductRepository.findOneBy({ id });
    if (!product) throw { status: 404, message: "Produto não encontrado" };
    return product;
  },

  async create(data: Partial<Product>): Promise<Product> {
    const newProduct = ProductRepository.create(data);
    return ProductRepository.save(newProduct);
  },

  async update(id: string, data: Partial<Product>): Promise<Product> {
    const product = await ProductRepository.findOneBy({ id });
    if (!product) throw { status: 404, message: "Produto não encontrado" };

    ProductRepository.merge(product, data);
    return ProductRepository.save(product);
  },

  async remove(id: string): Promise<void> {
    const product = await ProductRepository.findOneBy({ id });
    if (!product) throw { status: 404, message: "Produto não encontrado" };

    await ProductRepository.remove(product);
  },
};