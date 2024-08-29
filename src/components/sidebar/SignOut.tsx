"use client";

import { logout } from "@/actions/login";

export default function SignOut({ title }: { title: string }) {
  return (
    <button
      className="py-2 px-4 rounded-md text-muted-foreground hover:bg-muted hover:text-primary text-sm tracking-wide"
      onClick={() => logout()}
    >
      {title}
    </button>
  );
}
