export default function About() {
  return (
    <section id="about" className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            A little about me
          </h2>
        </div>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Write a short introduction here: who you are, what you build, and the
          kind of problems you enjoy solving. Keep it specific enough to feel
          personal and concise enough to scan quickly.
        </p>
      </div>
    </section>
  );
}
