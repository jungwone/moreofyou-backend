import { db } from "../database/database";
import { AdminUserSignUp } from "../types/types";

export async function findUserByEmail(email: string) {
  return db.adminUser.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
}

export async function createUser({ email, name, password }: AdminUserSignUp) {
  return db.adminUser.create({
    data: {
      email,
      name,
      password,
    },
    select: {
      name: true,
    },
  });
}
