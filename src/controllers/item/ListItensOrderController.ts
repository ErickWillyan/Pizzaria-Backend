import { Request, Response } from "express";
import { ListItensOrderService } from "../../services/item/ListItensOrderService";

class ListItensOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const listItemOrderService = new ListItensOrderService();

    const itens = await listItemOrderService.execute({ order_id });

    return res.json(itens);
  }
}

export { ListItensOrderController };
