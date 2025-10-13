import { Request, Response, NextFunction } from "express";
import { ProductService } from "../services/ProductService";

export const ProductController = {
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await ProductService.list());
    } catch (err) { next(err); }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      res.json(await ProductService.get(id));
    } catch (err) { next(err); }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(201).json(await ProductService.create(req.body));
    } catch (err) { next(err); }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      res.json(await ProductService.update(id, req.body));
    } catch (err) { next(err); }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = String(req.params.id);
      await ProductService.remove(id);
      res.status(204).send();
    } catch (err) { next(err); }
  },
};
