export type Exercice = {
  id: string;
  chapitre: string; // slug
  niveau: "Facile" | "Moyen" | "Difficile";
  enonce: string;
} & (
  | { type: "qcm"; options: string[]; bonneReponse: number; explication: string }
  | { type: "saisie"; reponses: string[]; explication: string; indice?: string }
);

export const exercices: Exercice[] = [
  {
    id: "lim-1",
    chapitre: "limites-et-continuite",
    niveau: "Facile",
    type: "qcm",
    enonce: "Que vaut lim (x → +∞) (2x² − x) / (x² + 3) ?",
    options: ["0", "2", "+∞", "1/3"],
    bonneReponse: 1,
    explication:
      "On factorise par x² : (2 − 1/x) / (1 + 3/x²). Les termes en 1/x tendent vers 0, la limite vaut donc 2.",
  },
  {
    id: "lim-2",
    chapitre: "limites-et-continuite",
    niveau: "Moyen",
    type: "saisie",
    enonce:
      "f(x) = x³ + x − 1 est continue et strictement croissante sur ℝ. Combien l'équation f(x) = 0 admet-elle de solutions sur ℝ ?",
    reponses: ["1", "une", "un"],
    indice: "Pense au théorème des valeurs intermédiaires avec la stricte monotonie.",
    explication:
      "f est continue et strictement croissante sur ℝ, avec f(0) = −1 < 0 et f(1) = 1 > 0. D'après le corollaire du théorème des valeurs intermédiaires, l'équation admet exactement 1 solution.",
  },
  {
    id: "der-1",
    chapitre: "derivation-et-convexite",
    niveau: "Facile",
    type: "qcm",
    enonce: "Quelle est la dérivée de f(x) = x² e^x ?",
    options: ["2x e^x", "(x² + 2x) e^x", "x² e^x", "(2x − x²) e^x"],
    bonneReponse: 1,
    explication:
      "Avec (uv)′ = u′v + uv′ où u = x² et v = e^x : f′(x) = 2x e^x + x² e^x = (x² + 2x) e^x.",
  },
  {
    id: "der-2",
    chapitre: "derivation-et-convexite",
    niveau: "Moyen",
    type: "saisie",
    enonce:
      "f(x) = x³ − 3x. Donne l'abscisse du point d'inflexion de la courbe de f.",
    reponses: ["0"],
    indice: "Cherche où f″ s'annule en changeant de signe.",
    explication:
      "f″(x) = 6x s'annule en 0 et change de signe : le point d'inflexion a pour abscisse 0.",
  },
  {
    id: "exp-1",
    chapitre: "fonction-exponentielle",
    niveau: "Moyen",
    type: "qcm",
    enonce: "Quelles sont les solutions de e^(2x) − 3e^x + 2 = 0 ?",
    options: ["x = 1 et x = 2", "x = 0 et x = ln 2", "x = ln 3", "Aucune solution"],
    bonneReponse: 1,
    explication:
      "On pose X = e^x > 0 : X² − 3X + 2 = 0 donne X = 1 ou X = 2, d'où x = ln 1 = 0 ou x = ln 2.",
  },
  {
    id: "exp-2",
    chapitre: "fonction-exponentielle",
    niveau: "Facile",
    type: "saisie",
    enonce: "Simplifie e^5 × e^(−5). Donne la valeur exacte.",
    reponses: ["1"],
    explication: "e^5 × e^(−5) = e^(5 − 5) = e^0 = 1.",
  },
  {
    id: "ln-1",
    chapitre: "logarithme-neperien",
    niveau: "Moyen",
    type: "saisie",
    enonce: "Résous ln(x) + ln(x − 1) = ln 6 pour x > 1. Donne la valeur de x.",
    reponses: ["3"],
    indice: "Utilise ln a + ln b = ln(ab), puis résous une équation du second degré.",
    explication:
      "ln(x(x − 1)) = ln 6 donne x² − x − 6 = 0, soit x = 3 ou x = −2. Comme x > 1, la solution est x = 3.",
  },
  {
    id: "ln-2",
    chapitre: "logarithme-neperien",
    niveau: "Facile",
    type: "qcm",
    enonce: "Quel est l'ensemble de définition de f(x) = ln(2x − 4) ?",
    options: ["]−∞ ; 2[", "]2 ; +∞[", "ℝ", "[2 ; +∞["],
    bonneReponse: 1,
    explication:
      "Il faut 2x − 4 > 0, c'est-à-dire x > 2. L'ensemble de définition est donc ]2 ; +∞[.",
  },
  {
    id: "suite-1",
    chapitre: "suites-numeriques",
    niveau: "Moyen",
    type: "qcm",
    enonce:
      "u₀ = 2 et uₙ₊₁ = 0,5 uₙ + 3. Quelle est la limite de la suite (uₙ) ?",
    options: ["2", "3", "6", "+∞"],
    bonneReponse: 2,
    explication:
      "vₙ = uₙ − 6 est géométrique de raison 0,5, donc uₙ = 6 − 4 × 0,5ⁿ. Comme 0,5ⁿ → 0, la limite est 6.",
  },
  {
    id: "suite-2",
    chapitre: "suites-numeriques",
    niveau: "Facile",
    type: "saisie",
    enonce:
      "Une suite arithmétique a pour premier terme u₀ = 5 et pour raison 3. Que vaut u₁₀ ?",
    reponses: ["35"],
    explication: "uₙ = u₀ + nr, donc u₁₀ = 5 + 10 × 3 = 35.",
  },
  {
    id: "proba-1",
    chapitre: "probabilites-conditionnelles",
    niveau: "Moyen",
    type: "saisie",
    enonce:
      "Machine A : 60 % des pièces, 2 % de défauts. Machine B : 40 % des pièces, 5 % de défauts. Quelle est la probabilité qu'une pièce prise au hasard soit défectueuse ? (écris le résultat décimal)",
    reponses: ["0,032", "0.032"],
    indice: "Applique la formule des probabilités totales.",
    explication:
      "P(D) = 0,6 × 0,02 + 0,4 × 0,05 = 0,012 + 0,02 = 0,032.",
  },
  {
    id: "proba-2",
    chapitre: "probabilites-conditionnelles",
    niveau: "Facile",
    type: "qcm",
    enonce: "Si P(A) = 0,4 et P(A ∩ B) = 0,1, que vaut P_A(B) ?",
    options: ["0,04", "0,25", "0,5", "0,1"],
    bonneReponse: 1,
    explication: "P_A(B) = P(A ∩ B) / P(A) = 0,1 / 0,4 = 0,25.",
  },
  {
    id: "bino-1",
    chapitre: "loi-binomiale",
    niveau: "Facile",
    type: "saisie",
    enonce: "X suit la loi B(10 ; 0,3). Que vaut l'espérance E(X) ?",
    reponses: ["3"],
    explication: "E(X) = np = 10 × 0,3 = 3.",
  },
  {
    id: "bino-2",
    chapitre: "loi-binomiale",
    niveau: "Moyen",
    type: "qcm",
    enonce: "X ~ B(5 ; 0,5). Quelle expression donne P(X = 2) ?",
    options: [
      "C(5, 2) × 0,5² × 0,5³",
      "0,5² × 0,5³",
      "C(5, 2) × 0,5⁵ × 2",
      "2 × 0,5⁵",
    ],
    bonneReponse: 0,
    explication:
      "P(X = k) = C(n, k) p^k (1 − p)^(n−k), donc P(X = 2) = C(5, 2) × 0,5² × 0,5³ = 10 × 0,03125 = 0,3125.",
  },
  {
    id: "geo-1",
    chapitre: "geometrie-dans-l-espace",
    niveau: "Facile",
    type: "saisie",
    enonce: "Calcule le produit scalaire u⃗(1 ; 2 ; −1) · v⃗(3 ; 0 ; 3).",
    reponses: ["0"],
    explication:
      "u⃗ · v⃗ = 1 × 3 + 2 × 0 + (−1) × 3 = 0 : les deux vecteurs sont orthogonaux.",
  },
  {
    id: "geo-2",
    chapitre: "geometrie-dans-l-espace",
    niveau: "Moyen",
    type: "qcm",
    enonce:
      "Quel est un vecteur normal du plan d'équation 2x − y + 3z − 8 = 0 ?",
    options: ["(2 ; 1 ; 3)", "(2 ; −1 ; 3)", "(−8 ; 2 ; 3)", "(1 ; 0 ; 2)"],
    bonneReponse: 1,
    explication:
      "Les coefficients de x, y et z donnent directement un vecteur normal : n⃗(2 ; −1 ; 3).",
  },
  {
    id: "lim-3",
    chapitre: "limites-et-continuite",
    niveau: "Moyen",
    type: "saisie",
    enonce: "Quelle est la limite quand x tend vers 0 de (e^x − 1) / x ?",
    reponses: ["1"],
    explication:
      "Il s'agit du taux d'accroissement de la fonction exponentielle en 0 : (e^x − e^0)/(x − 0) tend vers e^0 = 1.",
  },
  {
    id: "der-3",
    chapitre: "derivation-et-convexite",
    niveau: "Facile",
    type: "qcm",
    enonce:
      "Si f est deux fois dérivable et f″(x) > 0 sur un intervalle, que peut-on dire de la courbe de f ?",
    options: ["Convexe", "Concave", "Décroissante", "Majorée"],
    bonneReponse: 0,
    explication:
      "f″ > 0 signifie que f′ est croissante, donc la courbe de f est convexe (tournée vers le haut) sur cet intervalle.",
  },
  {
    id: "suite-3",
    chapitre: "suites-numeriques",
    niveau: "Facile",
    type: "saisie",
    enonce:
      "Une suite géométrique a pour premier terme v₀ = 8 et pour raison 1/2. Que vaut v₄ ?",
    reponses: ["0,5", "0.5", "1/2"],
    explication: "vₙ = v₀ × qⁿ donc v₄ = 8 × (1/2)⁴ = 8/16 = 0,5.",
  },
  {
    id: "proba-3",
    chapitre: "probabilites-conditionnelles",
    niveau: "Facile",
    type: "saisie",
    enonce:
      "On lance un dé équilibré. Quelle est la probabilité d'obtenir un nombre pair ? (donne le résultat décimal)",
    reponses: ["0,5", "0.5", "1/2"],
    explication:
      "Les résultats favorables sont 2, 4 et 6 sur 6 faces possibles, donc la probabilité est 3/6 = 0,5.",
  },
];

export const normaliser = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/\./g, ",");
