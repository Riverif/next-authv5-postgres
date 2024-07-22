"use server";

import * as z from "zod";

import { SignUpSchema } from "@/schemas";

export const signUp = async (values: z.infer<typeof SignUpSchema>) => {
  const validateFields = SignUpSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalide fields!" };
  }

  return { success: "Email sent!" };
};
