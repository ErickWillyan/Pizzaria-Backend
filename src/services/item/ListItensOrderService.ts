import prismaClient from "../../prisma";

interface ListItemRequest {
  order_id: string;
}

class ListItensOrderService {
  async execute({ order_id }: ListItemRequest) {
    const itens = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
    });

    return itens;
  }
}

export { ListItensOrderService };
