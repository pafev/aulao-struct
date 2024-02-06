import { permanentRedirect } from "next/navigation";
import { AuthProvider } from "~/components/pages/auth/authProvider";
import { getServerAuthSession } from "~/server/auth";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  if (!session?.user) {
    permanentRedirect("/login");
    return null;
  }

  return (
    <>
      <h1>Layout de autenticação</h1>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
}
