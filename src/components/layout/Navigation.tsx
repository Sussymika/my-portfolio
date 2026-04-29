const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-300">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              className="transition-colors hover:text-zinc-950 dark:hover:text-white"
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
