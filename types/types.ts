import { AdminUser } from "@prisma/client";

export type AdminUserSignUp = Omit<AdminUser, "id" | "approved">;
