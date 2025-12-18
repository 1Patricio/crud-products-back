import { ProductRepository } from "../repositories/ProductRepository";
import { Product } from "../models/ProductModel";
import { v4 as uuidv4 } from 'uuid';
import { UserRepository } from "../repositories/UserRepository";

export const ProductService = {
  async list(id: string): Promise<Product[]> {
    const authUser = await UserRepository.findOneBy({ id });
    if (!authUser) {
      throw new Error("Usuário não encontrado");
    }

    return ProductRepository.findBy({ createdByUser: authUser.id });
  },

  async get(id: string): Promise<Product> {
    if(id == null) throw { status: 404, message: "Erro ao buscar produto" };

    const product = await ProductRepository.findOneBy({ id });
    if (!product) throw { status: 404, message: "Produto não encontrado" };
    return product;
  },

  async create(data: Partial<Product>): Promise<Product> {
    data.id = uuidv4();
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