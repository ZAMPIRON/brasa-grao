"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

// Link do menu que fica destacado quando estamos na rota dele
export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const ativo = pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
        ativo
          ? "bg-white text-brasa shadow-sm"
          : "text-texto-suave hover:text-texto"
      }`}
    >
      {children}
    </Link>
  );
}
