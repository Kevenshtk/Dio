"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <p>Olá, {session.user?.name}</p>
          <button onClick={() => signOut("github")}>Sair</button>
        </>
      ) : (
        <button onClick={() => signIn("github")}>Entrar com Github</button>
      )}
    </div>
  );
}
