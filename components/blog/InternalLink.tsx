import type { ReactNode } from "react";
import Link from "next/link";

type InternalLinkProps = {
  href: string;
  children: ReactNode;
};

export function InternalLink({ href, children }: InternalLinkProps) {
  return (
    <Link
      href={href}
      className="font-semibold underline decoration-[#F46530]/35 underline-offset-2 hover:decoration-[#F46530]"
      style={{ color: "#F46530" }}
    >
      {children}
    </Link>
  );
}
