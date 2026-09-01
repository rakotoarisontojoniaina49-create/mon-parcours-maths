import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, GraduationCap, PencilRuler, ShieldCheck } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { chapitres } from "@/data/cours";
import { exercices } from "@/data/exercices";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "APK Math — Cours et exercices de maths en Terminale" },
      {
        name: "description",
        content:
          "Réviser les mathématiques de Terminale : fiches de cours par chapitre, formules essentielles et exercices interactifs corrigés et expliqués.",
      },
      { property: "og:title", content: "APK Math — Cours et exercices de maths en Terminale" },
      {
        property: "og:description",
        content:
          "Fiches de cours claires et exercices interactifs avec correction immédiate pour les élèves de Terminale.",
      },
    ],
  }),
  component: Accueil,
});

function Accueil() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/70 bg-linear-to-b from-accent/25 to-background">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
            <p className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary shadow-sm">
              <GraduationCap className="h-4 w-4" aria-hidden />
              Spécial classe de Terminale
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Les maths de Terminale, enfin claires et à ton rythme
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              APK Math réunit des fiches de cours lisibles, les formules à connaître et des
              exercices interactifs corrigés pas à pas. Tu te trompes ? On t'explique pourquoi,
              sans jugement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/cours"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <BookOpen className="h-4 w-4" aria-hidden />
                Voir les cours
              </Link>
              <Link
                to="/exercices"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-input bg-card px-6 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <PencilRuler className="h-4 w-4" aria-hidden />
                S'entraîner
              </Link>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { k: `${chapitres.length} chapitres`, v: "Analyse, probabilités, géométrie" },
                { k: `${exercices.length} exercices`, v: "QCM et réponses à saisir" },
                { k: "100 % corrigés", v: "Explication après chaque validation" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                  <dt className="font-display text-xl font-bold">{s.k}</dt>
                  <dd className="text-sm text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold sm:text-3xl">Comment ça marche ?</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                t: "1. Je révise le cours",
                d: "Rappels, formules encadrées et un exemple guidé pour chaque chapitre.",
              },
              {
                icon: PencilRuler,
                t: "2. Je m'entraîne",
                d: "Des exercices ciblés : QCM ou réponse à saisir, filtrables par chapitre.",
              },
              {
                icon: ShieldCheck,
                t: "3. Je comprends mes erreurs",
                d: "Correction immédiate avec l'explication détaillée du raisonnement.",
              },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <c.icon className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 text-lg font-semibold">{c.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl font-bold sm:text-3xl">Chapitres populaires</h2>
            <Link to="/cours" className="text-sm font-semibold text-primary hover:underline">
              Tous les chapitres
            </Link>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chapitres.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/cours/$slug"
                  params={{ slug: c.slug }}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {c.domaine}
                  </span>
                  <span className="mt-1 font-display text-lg font-bold">{c.titre}</span>
                  <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.resume}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
