import Link from "next/link";
import type { ReactNode } from "react";

const styles = "font-semibold underline decoration-[#F46530]/40 underline-offset-2 hover:decoration-[#F46530]";

export function LinkAI({ children }: { children: ReactNode }) {
  return (
    <Link href="/services/ai-development" className={styles} style={{ color: "#F46530" }}>
      {children}
    </Link>
  );
}

export function LinkGame({ children }: { children: ReactNode }) {
  return (
    <Link href="/services/game-development" className={styles} style={{ color: "#F46530" }}>
      {children}
    </Link>
  );
}

export function LinkWeb({ children }: { children: ReactNode }) {
  return (
    <Link href="/services/web-development" className={styles} style={{ color: "#F46530" }}>
      {children}
    </Link>
  );
}
