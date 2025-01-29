import prismaClient from "../../prisma";

interface FinishOderRequest {
  order_id: string;
}

class FinishOrderService {
  async execute({ order_id }: FinishOderRequest) {
    const order = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    });
    return order;
  }
}

export { FinishOrderService };
