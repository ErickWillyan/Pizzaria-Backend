import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface userRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ email, name, password }: userRequest) {
    if (!email) {
      throw new Error("Email não enviado");
    }

    const userAlreadyExistis = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExistis) {
      throw new Error("Esse usuário já existe");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        email: email,
        name: name,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  }
}

export { CreateUserService };
