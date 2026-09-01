import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { chapitres } from "@/data/cours";

export const Route = createFileRoute("/cours/")({
  head: () => ({
    meta: [
      { title: "Cours de maths Terminale par chapitre — Math Terminal" },
      {
        name: "description",
        content:
          "Toutes les fiches de cours de mathématiques de Terminale : limites, dérivation, exponentielle, logarithme, suites, probabilités et géométrie dans l'espace.",
      },
      { property: "og:title", content: "Cours de maths Terminale par chapitre — Math Terminal" },
      {
        property: "og:description",
        content: "Fiches de cours claires avec rappels, formules et exemples guidés.",
      },
    ],
  }),
  component: CoursIndex,
});

function CoursIndex() {
  const domaines = [...new Set(chapitres.map((c) => c.domaine))];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        <h1 className="text-3xl font-bold sm:text-4xl">Cours par chapitre</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Chaque fiche contient les rappels essentiels, les formules à retenir et un exemple
          guidé. Prends ton temps : tu peux y revenir autant de fois que nécessaire.
        </p>

        {domaines.map((d) => (
          <section key={d} className="mt-10">
            <h2 className="text-xl font-bold">{d}</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {chapitres
                .filter((c) => c.domaine === d)
                .map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/cours/$slug"
                      params={{ slug: c.slug }}
                      className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <span className="font-display text-lg font-bold">{c.titre}</span>
                      <span className="mt-2 grow text-sm leading-relaxed text-muted-foreground">
                        {c.resume}
                      </span>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" aria-hidden />
                        {c.duree}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
