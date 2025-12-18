import { Request, Response, NextFunction } from "express";
import { ProductService } from "../services/ProductService";
import { AuthService } from "../services/AuthService";

export const ProductController = {
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const user = AuthService.userInfo(req.headers.authorization!.replace("Bearer ", ""));
      res.json(await ProductService.list((await user).id));
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