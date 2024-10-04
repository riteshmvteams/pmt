"use client";
import React from "react";
import { Boxes } from "./background-boxes";
import LoginForm from "@/app/(login)/_components/LoginForm";
import Logo from "../Logo";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center min-h-screen">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="flex items-center justify-center px-2 sm:px-6 lg:px-0 bg-background relative z-50 rounded-md mx-4 sm:mx-0">
        <div className="mx-auto grid max-w-[500px] w-full gap-20 p-2 sm:p-6">
          <div className="grid text-left">
            <Logo url="/" />
            <h1 className="text-xl md:text-3xl font-bold font-lexend">
              Welcome back! Please Log in to continue.
            </h1>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
