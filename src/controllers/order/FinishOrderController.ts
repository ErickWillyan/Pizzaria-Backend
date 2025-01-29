import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";

class FinishOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const finishServiceController = new FinishOrderService();

    const order = await finishServiceController.execute({ order_id });

    return res.json(order);
  }
}

export { FinishOrderController };
