"use server";

import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "./auth-cookie";
import { redirect } from "next/navigation";

export default async function logout() {
    const cookieStore = await cookies();
    cookieStore.set({
        name: AUTHENTICATION_COOKIE,
        value: "",
        path: "/",
        expires: new Date(0),
    });

    redirect("/auth/login");
}