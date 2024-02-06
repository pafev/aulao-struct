"use client";

import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <button className="rounded border-2 px-4 py-2" onClick={() => signOut()}>
      Sair da sua conta
    </button>
  );
}

export { SignOutButton };
