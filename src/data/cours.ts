export type Bloc =
  | { type: "texte"; contenu: string }
  | { type: "formule"; contenu: string; legende?: string }
  | { type: "exemple"; titre: string; contenu: string };

export type Chapitre = {
  slug: string;
  titre: string;
  domaine: string;
  resume: string;
  duree: string;
  rappels: string[];
  blocs: Bloc[];
};

export const chapitres: Chapitre[] = [
  {
    slug: "limites-et-continuite",
    titre: "Limites et continuité",
    domaine: "Analyse",
    resume:
      "Calculer des limites de suites et de fonctions, lever les formes indéterminées et utiliser la continuité.",
    duree: "45 min",
    rappels: [
      "Une limite décrit le comportement d'une fonction au voisinage d'un point ou en l'infini.",
      "Les formes indéterminées classiques : 0/0, ∞/∞, ∞ − ∞, 0 × ∞.",
      "Une fonction continue sur un intervalle se trace « sans lever le crayon ».",
    ],
    blocs: [
      {
        type: "texte",
        contenu:
          "Pour une fonction rationnelle, la limite en l'infini se détermine avec les termes de plus haut degré du numérateur et du dénominateur.",
      },
      {
        type: "formule",
        contenu: "lim (x → +∞) (3x² + 5x) / (x² − 1) = 3",
        legende: "On factorise par x² au numérateur et au dénominateur.",
      },
      {
        type: "texte",
        contenu:
          "Théorème des valeurs intermédiaires : si f est continue sur [a ; b] et si k est compris entre f(a) et f(b), alors l'équation f(x) = k admet au moins une solution dans [a ; b]. Si de plus f est strictement monotone, cette solution est unique.",
      },
      {
        type: "exemple",
        titre: "Exemple guidé",
        contenu:
          "f(x) = x³ + x − 1 est continue et strictement croissante sur ℝ. Comme f(0) = −1 < 0 et f(1) = 1 > 0, l'équation f(x) = 0 admet une unique solution dans ]0 ; 1[.",
      },
    ],
  },
  {
    slug: "derivation-et-convexite",
    titre: "Dérivation et convexité",
    domaine: "Analyse",
    resume:
      "Dériver les fonctions usuelles, étudier les variations, la convexité et les points d'inflexion.",
    duree: "40 min",
    rappels: [
      "Le nombre dérivé f′(a) est le coefficient directeur de la tangente en a.",
      "Le signe de f′ donne les variations de f.",
      "Le signe de f″ donne la convexité de f.",
    ],
    blocs: [
      {
        type: "formule",
        contenu: "(u × v)′ = u′v + uv′     (u / v)′ = (u′v − uv′) / v²",
        legende: "Formules de produit et de quotient.",
      },
      {
        type: "formule",
        contenu: "y = f′(a)(x − a) + f(a)",
        legende: "Équation de la tangente à la courbe au point d'abscisse a.",
      },
      {
        type: "texte",
        contenu:
          "Si f″(x) ≥ 0 sur un intervalle, f est convexe (courbe au-dessus de ses tangentes). Si f″ change de signe en a, le point d'abscisse a est un point d'inflexion.",
      },
      {
        type: "exemple",
        titre: "Exemple guidé",
        contenu:
          "f(x) = x³ − 3x. On a f′(x) = 3x² − 3 = 3(x − 1)(x + 1) : f croît sur ]−∞ ; −1], décroît sur [−1 ; 1] puis croît. f″(x) = 6x s'annule en 0 en changeant de signe : point d'inflexion en (0 ; 0).",
      },
    ],
  },
  {
    slug: "fonction-exponentielle",
    titre: "Fonction exponentielle",
    domaine: "Analyse",
    resume:
      "Propriétés algébriques, dérivée, limites et résolution d'équations avec la fonction exponentielle.",
    duree: "35 min",
    rappels: [
      "exp est définie sur ℝ, strictement positive et strictement croissante.",
      "exp(0) = 1 et exp′ = exp.",
      "exp et ln sont des fonctions réciproques l'une de l'autre.",
    ],
    blocs: [
      {
        type: "formule",
        contenu: "e^(a+b) = e^a × e^b     e^(−a) = 1 / e^a     (e^a)^n = e^(na)",
        legende: "Propriétés algébriques.",
      },
      {
        type: "formule",
        contenu: "lim (x → +∞) e^x / x = +∞     lim (x → −∞) x e^x = 0",
        legende: "Croissances comparées : l'exponentielle l'emporte.",
      },
      {
        type: "exemple",
        titre: "Exemple guidé",
        contenu:
          "Résoudre e^(2x) − 3e^x + 2 = 0. On pose X = e^x > 0 : X² − 3X + 2 = 0 donne X = 1 ou X = 2, d'où x = 0 ou x = ln 2.",
      },
    ],
  },
  {
    slug: "logarithme-neperien",
    titre: "Logarithme népérien",
    domaine: "Analyse",
    resume: "Domaine, propriétés, dérivée et équations faisant intervenir ln.",
    duree: "30 min",
    rappels: [
      "ln est définie sur ]0 ; +∞[ et strictement croissante.",
      "ln 1 = 0 et ln e = 1.",
      "ln′(x) = 1/x.",
    ],
    blocs: [
      {
        type: "formule",
        contenu: "ln(ab) = ln a + ln b     ln(a/b) = ln a − ln b     ln(aⁿ) = n ln a",
      },
      {
        type: "texte",
        contenu:
          "Pour résoudre une équation avec ln, on commence toujours par déterminer l'ensemble de définition (les arguments doivent être strictement positifs).",
      },
      {
        type: "exemple",
        titre: "Exemple guidé",
        contenu:
          "Résoudre ln(x) + ln(x − 1) = ln 6 avec x > 1. On obtient ln(x(x−1)) = ln 6, soit x² − x − 6 = 0, donc x = 3 (la solution −2 est exclue).",
      },
    ],
  },
  {
    slug: "suites-numeriques",
    titre: "Suites numériques",
    domaine: "Analyse",
    resume:
      "Suites arithmétiques et géométriques, raisonnement par récurrence, convergence et limites.",
    duree: "40 min",
    rappels: [
      "Suite arithmétique : uₙ₊₁ = uₙ + r, donc uₙ = u₀ + nr.",
      "Suite géométrique : uₙ₊₁ = q uₙ, donc uₙ = u₀ qⁿ.",
      "Toute suite croissante et majorée converge.",
    ],
    blocs: [
      {
        type: "formule",
        contenu: "Si −1 < q < 1 alors lim qⁿ = 0 ; si q > 1 alors lim qⁿ = +∞",
        legende: "Limite d'une suite géométrique.",
      },
      {
        type: "texte",
        contenu:
          "Le raisonnement par récurrence comporte trois étapes : l'initialisation, l'hérédité (on suppose la propriété vraie au rang n et on la démontre au rang n + 1) et la conclusion.",
      },
      {
        type: "exemple",
        titre: "Exemple guidé",
        contenu:
          "u₀ = 2 et uₙ₊₁ = 0,5 uₙ + 3. La suite vₙ = uₙ − 6 est géométrique de raison 0,5, donc uₙ = 6 − 4 × 0,5ⁿ et lim uₙ = 6.",
      },
    ],
  },
  {
    slug: "probabilites-conditionnelles",
    titre: "Probabilités conditionnelles",
    domaine: "Probabilités",
    resume:
      "Probabilités conditionnelles, arbres pondérés, indépendance et formule des probabilités totales.",
    duree: "35 min",
    rappels: [
      "P_A(B) = P(A ∩ B) / P(A) avec P(A) ≠ 0.",
      "A et B sont indépendants si P(A ∩ B) = P(A) × P(B).",
      "Sur un arbre pondéré, on multiplie le long d'une branche et on additionne les branches.",
    ],
    blocs: [
      {
        type: "formule",
        contenu: "P(B) = P(A) × P_A(B) + P(Ā) × P_Ā(B)",
        legende: "Formule des probabilités totales.",
      },
      {
        type: "exemple",
        titre: "Exemple guidé",
        contenu:
          "Une usine a deux machines : A produit 60 % des pièces avec 2 % de défauts, B produit 40 % avec 5 % de défauts. La probabilité qu'une pièce soit défectueuse est 0,6 × 0,02 + 0,4 × 0,05 = 0,032.",
      },
    ],
  },
  {
    slug: "loi-binomiale",
    titre: "Loi binomiale",
    domaine: "Probabilités",
    resume: "Schéma de Bernoulli, coefficients binomiaux, espérance et écart type.",
    duree: "30 min",
    rappels: [
      "Un schéma de Bernoulli est une répétition de n épreuves identiques et indépendantes à deux issues.",
      "X ~ B(n ; p) compte le nombre de succès.",
    ],
    blocs: [
      {
        type: "formule",
        contenu: "P(X = k) = C(n, k) × p^k × (1 − p)^(n − k)",
      },
      {
        type: "formule",
        contenu: "E(X) = np     V(X) = np(1 − p)     σ(X) = √(np(1 − p))",
      },
      {
        type: "exemple",
        titre: "Exemple guidé",
        contenu:
          "X ~ B(10 ; 0,3). P(X = 2) = C(10, 2) × 0,3² × 0,7⁸ ≈ 0,233 et E(X) = 3.",
      },
    ],
  },
  {
    slug: "geometrie-dans-l-espace",
    titre: "Géométrie dans l'espace",
    domaine: "Géométrie",
    resume:
      "Vecteurs de l'espace, produit scalaire, équations de droites et de plans.",
    duree: "45 min",
    rappels: [
      "Un plan est caractérisé par un point et un vecteur normal.",
      "Deux vecteurs sont orthogonaux si leur produit scalaire est nul.",
    ],
    blocs: [
      {
        type: "formule",
        contenu: "u⃗ · v⃗ = xx′ + yy′ + zz′",
        legende: "Produit scalaire en base orthonormée.",
      },
      {
        type: "formule",
        contenu: "ax + by + cz + d = 0",
        legende: "Équation cartésienne d'un plan de vecteur normal n⃗(a ; b ; c).",
      },
      {
        type: "exemple",
        titre: "Exemple guidé",
        contenu:
          "Le plan passant par A(1 ; 0 ; 2) et de vecteur normal n⃗(2 ; −1 ; 3) a pour équation 2x − y + 3z − 8 = 0.",
      },
    ],
  },
];

export const getChapitre = (slug: string) => chapitres.find((c) => c.slug === slug);
