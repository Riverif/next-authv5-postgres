import bcrypt from "bcryptjs";

import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { getUserByEmail } from "./data/user";

import { LoginSchema } from "./schemas";

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      async authorize(credentials) {
        // throw new InvalidLoginError();
        return null;
        // const validateFields = LoginSchema.safeParse(credentials);
        // if (validateFields.success) {
        //   const { email, password } = validateFields.data;
        //   const user = await getUserByEmail(email);
        //   if (!user || !user.password) return null;

        //   const passwordMatch = await bcrypt.compare(password, user.password);

        //   if (passwordMatch) return user;
        // }
        // return null;
      },
    }),
  ],
});
