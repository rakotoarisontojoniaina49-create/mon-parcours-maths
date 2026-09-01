import { Link } from "@tanstack/react-router";

const liens = [
  { to: "/", label: "Accueil" },
  { to: "/cours", label: "Cours" },
  { to: "/exercices", label: "Exercices" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="APK Math, accueil">
          <span
            aria-hidden
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground"
          >
            π
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-bold leading-tight">
              APK Math
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              Maths de Terminale
            </span>
          </span>
        </Link>

        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-1 sm:gap-2">
            {liens.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  activeProps={{
                    className: "bg-secondary text-secondary-foreground font-semibold",
                    "aria-current": "page",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
        <p>
          APK Math — réviser les mathématiques de Terminale à son rythme, sans stress.
        </p>
      </div>
    </footer>
  );
}
