export default function About() {
  return (
    <section id="about" className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            About me
          </h2>
        </div>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          I am name a developer with a passion for building web applications. I
          have experience working with a wide range of technologies, including React, Next.js, and
          Node.js. I am also experienced in working with databases like MongoDB and PostgreSQL.
        </p>
      </div>
    </section>
  );
}
