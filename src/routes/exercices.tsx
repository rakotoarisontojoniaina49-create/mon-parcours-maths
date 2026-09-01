import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ExerciceCard } from "@/components/ExerciceCard";
import { SiteFooter, SiteHeader } from "@/components/SiteHeader";
import { chapitres } from "@/data/cours";
import { exercices } from "@/data/exercices";

type Recherche = { chapitre?: string | undefined };

export const Route = createFileRoute("/exercices")({
  validateSearch: (search: Record<string, unknown>): Recherche => ({
    chapitre: typeof search["chapitre"] === "string" ? (search["chapitre"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Exercices de maths Terminale corrigés — Math Terminal" },
      {
        name: "description",
        content:
          "Entraîne-toi avec des exercices interactifs de Terminale : QCM et réponses à saisir, validation immédiate et explication détaillée de la correction.",
      },
      { property: "og:title", content: "Exercices de maths Terminale corrigés — Math Terminal" },
      {
        property: "og:description",
        content: "Exercices interactifs avec correction immédiate et explication détaillée.",
      },
    ],
  }),
  component: PageExercices,
});

function PageExercices() {
  const { chapitre } = Route.useSearch();
  const navigate = useNavigate({ from: "/exercices" });
  const [resultats, setResultats] = useState<Record<string, boolean>>({});

  const liste = chapitre ? exercices.filter((e) => e.chapitre === chapitre) : exercices;
  const reussis = Object.values(resultats).filter(Boolean).length;
  const faits = Object.keys(resultats).length;

  const filtrer = (slug?: string) =>
    navigate({ search: slug ? { chapitre: slug } : {}, replace: true });

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <h1 className="text-3xl font-bold sm:text-4xl">Exercices interactifs</h1>
        <p className="mt-3 text-muted-foreground">
          Choisis un chapitre, réponds, puis valide : la correction et l'explication
          s'affichent immédiatement. Se tromper fait partie de l'apprentissage.
        </p>

        <nav aria-label="Filtrer par chapitre" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            <li>
              <button
                type="button"
                onClick={() => filtrer(undefined)}
                aria-pressed={!chapitre}
                className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-medium transition-colors ${
                  !chapitre
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-input bg-card hover:bg-secondary"
                }`}
              >
                Tous
              </button>
            </li>
            {chapitres.map((c) => (
              <li key={c.slug}>
                <button
                  type="button"
                  onClick={() => filtrer(c.slug)}
                  aria-pressed={chapitre === c.slug}
                  className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-medium transition-colors ${
                    chapitre === c.slug
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input bg-card hover:bg-secondary"
                  }`}
                >
                  {c.titre}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <p
          aria-live="polite"
          className="mt-6 rounded-2xl border border-border bg-card p-4 text-sm shadow-sm"
        >
          {faits === 0
            ? `${liste.length} exercice${liste.length > 1 ? "s" : ""} à découvrir. Bon courage !`
            : `Score : ${reussis} bonne${reussis > 1 ? "s" : ""} réponse${reussis > 1 ? "s" : ""} sur ${faits} exercice${faits > 1 ? "s" : ""} validé${faits > 1 ? "s" : ""}.`}
        </p>

        {liste.length === 0 ? (
          <p className="mt-8 text-muted-foreground">
            Aucun exercice pour ce chapitre pour le moment.{" "}
            <Link to="/cours" className="font-semibold text-primary hover:underline">
              Revoir les cours
            </Link>
          </p>
        ) : (
          <div className="mt-6 space-y-5">
            {liste.map((e, i) => (
              <ExerciceCard
                key={e.id}
                exercice={e}
                numero={i + 1}
                chapitreTitre={chapitres.find((c) => c.slug === e.chapitre)?.titre ?? ""}
                onResultat={(id, correct) =>
                  setResultats((r) => ({ ...r, [id]: correct }))
                }
              />
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
