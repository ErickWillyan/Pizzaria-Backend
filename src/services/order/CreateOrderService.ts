import prismaClient from "../../prisma";

interface CreateOrderRequest {
  table: number;
  name: string;
}

class CreateOrderService {
  async execute({ table, name }: CreateOrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        table: table,
        name: name,
      },
    });
    return order;
  }
}

export { CreateOrderService };
