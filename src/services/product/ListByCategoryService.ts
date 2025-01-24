import prismaClient from "../../prisma";

interface ListRequest {
  category_id: string;
}

class ListByCategoryService {
  async execute({ category_id }: ListRequest) {
    const products = await prismaClient.product.findMany({
      where: {
        category_id: category_id,
      },
    });

    return products;
  }
}

export { ListByCategoryService };
