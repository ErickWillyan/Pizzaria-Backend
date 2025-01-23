import prismaClient from "../../prisma";

interface categoryRequest {
  name: string;
}

class CreateCategorySevrice {
  async execute({ name }: categoryRequest) {
    if (name == " ") {
      throw new Error("Nome inválido");
    }

    const categoryExists = await prismaClient.category.findFirst({
      where: {
        name: name,
      },
    });

    if (categoryExists) {
      throw new Error("Essa categoria já existe");
    }

    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { CreateCategorySevrice };
