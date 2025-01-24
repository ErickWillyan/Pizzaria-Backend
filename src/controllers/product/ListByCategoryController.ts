import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const listbyCategoryService = new ListByCategoryService();

    const products = await listbyCategoryService.execute({ category_id });

    return res.json(products);
  }
}

export { ListByCategoryController };
