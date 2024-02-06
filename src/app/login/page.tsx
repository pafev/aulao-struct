import { permanentRedirect } from "next/navigation";
import { SignInButton } from "~/components/pages/login/signInButton";
import { getServerAuthSession } from "~/server/auth";

export default async function LoginPage() {
  const session = await getServerAuthSession();

  if (session?.user) {
    permanentRedirect("/profile");
    return null;
  }

  return (
    <>
      <h1 className="my-4 text-4xl font-semibold">Página de Login</h1>
      <SignInButton />
    </>
  );
}
