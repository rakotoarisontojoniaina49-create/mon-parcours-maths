import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, PencilRuler } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { getChapitre } from "@/data/cours";
import { exercices } from "@/data/exercices";

export const Route = createFileRoute("/cours/$slug")({
  loader: ({ params }) => {
    const chapitre = getChapitre(params.slug);
    if (!chapitre) throw notFound();
    return { chapitre };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Chapitre indisponible — Math Terminal" }, { name: "robots", content: "noindex" }],
      };
    }
    const { chapitre } = loaderData;
    const titre = `${chapitre.titre} — Cours de Terminale | Math Terminal`;
    return {
      meta: [
        { title: titre },
        { name: "description", content: chapitre.resume },
        { property: "og:title", content: titre },
        { property: "og:description", content: chapitre.resume },
      ],
    };
  },
  component: FicheCours,
});

function FicheCours() {
  const { chapitre } = Route.useLoaderData();
  const nbExos = exercices.filter((e) => e.chapitre === chapitre.slug).length;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <Link
          to="/cours"
          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Tous les chapitres
        </Link>

        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary">
          {chapitre.domaine}
        </p>
        <h1 className="mt-1 text-3xl font-bold sm:text-4xl">{chapitre.titre}</h1>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{chapitre.resume}</p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" aria-hidden />
          Lecture estimée : {chapitre.duree}
        </p>

        <section className="mt-8 rounded-2xl border border-border bg-accent/25 p-5">
          <h2 className="text-lg font-bold">Rappels essentiels</h2>
          <ul className="mt-3 space-y-2">
            {chapitre.rappels.map((r) => (
              <li key={r} className="flex gap-2 text-sm leading-relaxed">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 space-y-5">
          <h2 className="text-lg font-bold">Le cours</h2>
          {chapitre.blocs.map((b, i) => {
            if (b.type === "texte") {
              return (
                <p key={i} className="text-base leading-relaxed">
                  {b.contenu}
                </p>
              );
            }
            if (b.type === "formule") {
              return (
                <figure
                  key={i}
                  className="rounded-2xl border border-primary/25 bg-card p-5 shadow-sm"
                >
                  <p className="overflow-x-auto text-center font-display text-lg font-semibold">
                    {b.contenu}
                  </p>
                  {b.legende && (
                    <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                      {b.legende}
                    </figcaption>
                  )}
                </figure>
              );
            }
            return (
              <div key={i} className="rounded-2xl border border-border bg-secondary/50 p-5">
                <h3 className="font-display text-base font-bold">{b.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed">{b.contenu}</p>
              </div>
            );
          })}
        </section>

        <section className="mt-10 rounded-2xl border border-border bg-card p-5 shadow-sm">
          <h2 className="text-lg font-bold">Prêt·e à t'entraîner ?</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {nbExos} exercice{nbExos > 1 ? "s" : ""} corrigé{nbExos > 1 ? "s" : ""} sur ce
            chapitre.
          </p>
          <Link
            to="/exercices"
            search={{ chapitre: chapitre.slug }}
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <PencilRuler className="h-4 w-4" aria-hidden />
            Faire les exercices
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
