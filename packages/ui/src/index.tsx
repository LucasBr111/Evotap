import type { ReactNode } from "react";

export function Placeholder({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="mt-4 text-slate-600">{children}</p>
    </main>
  );
}
