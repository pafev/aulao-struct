"use client";
import { useState } from "react";
import { SignOutButton } from "~/components/pages/auth/profile/signOutButton";
import { api } from "~/trpc/react";

export default function ProfilePage() {
  const { mutate, isLoading } = api.posts.create.useMutation({
    onSuccess: () => {
      console.log("post criado com sucesso");
    },
    onError: ({ data }) => {
      console.log(data?.code);
    },
  });

  const { data } = api.posts.getAll.useQuery();

  const [formData, setFormData] = useState({
    content: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutate({ content: formData.content });
  }

  return (
    <>
      <h1 className="my-4 text-lg font-semibold">Página do usuário</h1>
      <form
        onSubmit={handleSubmit}
        className="my-10 flex flex-col items-center gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="content">Conteudo do post</label>
          <input
            type="text"
            placeholder="conteudo"
            name="content"
            id="content"
            onChange={handleChange}
            className="rounded px-4 py-2 text-slate-950 outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded border-2 px-4 py-2"
          disabled={isLoading}
        >
          {!!isLoading && "Carregando..."}
          {!isLoading && "Criar post"}
        </button>
      </form>
      <SignOutButton />
    </>
  );
}
