import { useId, useState } from "react";
import { CheckCircle2, Lightbulb, RotateCcw, XCircle } from "lucide-react";
import { normaliser, type Exercice } from "@/data/exercices";

const couleurNiveau: Record<Exercice["niveau"], string> = {
  Facile: "bg-success/15 text-success-foreground",
  Moyen: "bg-warning/25 text-warning-foreground",
  Difficile: "bg-destructive/15 text-destructive",
};

export function ExerciceCard({
  exercice,
  numero,
  chapitreTitre,
  onResultat,
}: {
  exercice: Exercice;
  numero: number;
  chapitreTitre?: string;
  onResultat?: (id: string, correct: boolean) => void;
}) {
  const groupName = useId();
  const [choix, setChoix] = useState<number | null>(null);
  const [saisie, setSaisie] = useState("");
  const [valide, setValide] = useState(false);
  const [indiceVisible, setIndiceVisible] = useState(false);

  const correct =
    exercice.type === "qcm"
      ? choix === exercice.bonneReponse
      : exercice.reponses.some((r) => normaliser(r) === normaliser(saisie));

  const peutValider = exercice.type === "qcm" ? choix !== null : saisie.trim() !== "";

  const valider = () => {
    if (!peutValider) return;
    setValide(true);
    onResultat?.(exercice.id, correct);
  };

  const reinitialiser = () => {
    setValide(false);
    setChoix(null);
    setSaisie("");
    setIndiceVisible(false);
  };

  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">
          Exercice {numero}
        </span>
        <span className={`rounded-full px-2.5 py-1 font-medium ${couleurNiveau[exercice.niveau]}`}>
          {exercice.niveau}
        </span>
        {chapitreTitre && (
          <span className="text-muted-foreground">{chapitreTitre}</span>
        )}
      </div>

      <p className="mt-3 text-base leading-relaxed text-card-foreground">{exercice.enonce}</p>

      {exercice.type === "qcm" ? (
        <fieldset className="mt-4 space-y-2" disabled={valide}>
          <legend className="sr-only">Choisis la bonne réponse</legend>
          {exercice.options.map((opt, i) => {
            const estBonne = valide && i === exercice.bonneReponse;
            const estMauvaise = valide && i === choix && i !== exercice.bonneReponse;
            return (
              <label
                key={i}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition-colors ${
                  estBonne
                    ? "border-success bg-success/10"
                    : estMauvaise
                      ? "border-destructive bg-destructive/10"
                      : choix === i
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-secondary/60"
                }`}
              >
                <input
                  type="radio"
                  name={groupName}
                  className="mt-1 h-4 w-4 shrink-0 accent-[var(--primary)]"
                  checked={choix === i}
                  onChange={() => setChoix(i)}
                />
                <span className="min-w-0 text-sm leading-relaxed">{opt}</span>
              </label>
            );
          })}
        </fieldset>
      ) : (
        <div className="mt-4">
          <label htmlFor={`${groupName}-saisie`} className="text-sm font-medium">
            Ta réponse
          </label>
          <input
            id={`${groupName}-saisie`}
            value={saisie}
            disabled={valide}
            onChange={(e) => setSaisie(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") valider();
            }}
            placeholder="Écris ta réponse ici"
            className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-base placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-70"
          />
          {exercice.indice && !valide && (
            <div className="mt-2">
              <button
                type="button"
                onClick={() => setIndiceVisible((v) => !v)}
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                <Lightbulb className="h-4 w-4" aria-hidden />
                {indiceVisible ? "Masquer l'indice" : "Afficher un indice"}
              </button>
              {indiceVisible && (
                <p className="mt-1 rounded-xl bg-accent/40 p-3 text-sm text-accent-foreground">
                  {exercice.indice}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {!valide ? (
          <button
            type="button"
            onClick={valider}
            disabled={!peutValider}
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Valider ma réponse
          </button>
        ) : (
          <button
            type="button"
            onClick={reinitialiser}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-input px-5 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            Réessayer
          </button>
        )}
      </div>

      <div aria-live="polite">
        {valide && (
          <div
            className={`mt-4 rounded-xl border p-4 ${
              correct ? "border-success/40 bg-success/10" : "border-destructive/40 bg-destructive/5"
            }`}
          >
            <p className="flex items-center gap-2 font-display font-semibold">
              {correct ? (
                <CheckCircle2 className="h-5 w-5 text-success" aria-hidden />
              ) : (
                <XCircle className="h-5 w-5 text-destructive" aria-hidden />
              )}
              {correct ? "Bravo, c'est la bonne réponse !" : "Pas encore — regarde la correction"}
            </p>
            {!correct && (
              <p className="mt-2 text-sm">
                <span className="font-semibold">Réponse attendue : </span>
                {exercice.type === "qcm"
                  ? exercice.options[exercice.bonneReponse]
                  : exercice.reponses[0]}
              </p>
            )}
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Explication : </span>
              {exercice.explication}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
