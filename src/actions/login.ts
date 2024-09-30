"use server";

import { routes } from "@/config/routes";
import { redirect } from "next/navigation";

export async function login() {
  redirect(routes.projects);
}

export async function logout() {
  redirect("/");
}
