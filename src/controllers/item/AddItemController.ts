import { Request, Response } from "express";
import { AddItemService } from "../../services/item/AddItemService";

class AddItemController {
  async handle(req: Request, res: Response) {
    const { amount, product_id, order_id } = req.body;
    const addItemService = new AddItemService();

    const item = await addItemService.execute({
      product_id,
      order_id,
      amount,
    });

    return res.json(item);
  }
}

export { AddItemController };
