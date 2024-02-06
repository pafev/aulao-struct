"use client";

import { signIn } from "next-auth/react";

function SignInButton() {
  return (
    <button
      className="rounded border-2 px-4 py-2"
      onClick={() => signIn("discord")}
    >
      Entre com a sua conta do discord
    </button>
  );
}

export { SignInButton };
