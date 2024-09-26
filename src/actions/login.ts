"use server";

import { redirect } from "next/navigation";

export async function login() {
  return true;
}

export async function logout() {
  redirect("/");
}
