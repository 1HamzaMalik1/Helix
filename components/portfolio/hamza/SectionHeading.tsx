interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-base text-zinc-400">{subtitle}</p> : null}
    </div>
  );
}
