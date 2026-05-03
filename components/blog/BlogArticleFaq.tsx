type BlogArticleFaqItem = {
  question: string;
  answer: string;
};

export function BlogArticleFaq({ items }: { items: BlogArticleFaqItem[] }) {
  if (items.length === 0) return null;

  return (
    <>
      <h2>Frequently asked questions</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-5 shadow-sm md:p-6"
          >
            <h3 className="text-base font-bold leading-snug text-zinc-950 md:text-lg">{item.question}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">{item.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}
