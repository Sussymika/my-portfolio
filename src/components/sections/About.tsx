import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="border-t border-zinc-100 dark:border-zinc-400">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            About me
          </h2>
        </div>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          I am Dylan a developer with a passion for building web applications. I
          have experience working with a wide range of technologies, including React, Next.js, and
          Node.js. I am also experienced in working with databases like MongoDB and PostgreSQL.
        </p>

        <div className="mt-8 overflow-hidden rounded-lg border border-zinc-100 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <img
            src="https://media1.tenor.com/m/KdIR-Rgzb5wAAAAd/blue-archive-misono-mika.gif"
            alt="About me GIF"
            className="mx-auto h-56 w-full object-contain"
            loading="lazy"
          />
        </div>
        
      </div>
    </section>
  );
}
