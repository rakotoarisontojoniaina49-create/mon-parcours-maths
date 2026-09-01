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
  {
    slug: "nombres-complexes",
    titre: "Nombres complexes",
    domaine: "Analyse",
    resume:
      "Forme algébrique, forme trigonométrique, module, argument et équations du second degré.",
    duree: "50 min",
    rappels: [
      "Un nombre complexe s'écrit z = a + ib avec (a, b) ∈ ℝ².",
      "Le module |z| = √(a² + b²) et l'argument arg(z) mesure l'angle avec l'axe réel.",
      "i² = −1 ; les racines carrées d'un nombre négatif sont des imaginaires purs.",
    ],
    blocs: [
      {
        type: "formule",
        contenu: "z = r(cos θ + i sin θ) = r e^(iθ)",
        legende: "Forme trigonométrique et exponentielle.",
      },
      {
        type: "formule",
        contenu: "|z × z′| = |z| × |z′|     arg(z × z′) = arg(z) + arg(z′)",
        legende: "Propriétés du module et de l'argument.",
      },
      {
        type: "exemple",
        titre: "Exemple guidé",
        contenu:
          "z = 1 + i√3 a pour module √(1 + 3) = 2 et pour argument π/3. On peut donc écrire z = 2 e^(iπ/3).",
      },
    ],
  },
  {
    slug: "integration",
    titre: "Intégration",
    domaine: "Analyse",
    resume:
      "Intégrale d'une fonction continue positive, primitives, aire sous la courbe et intégration par parties.",
    duree: "50 min",
    rappels: [
      "L'intégrale d'une fonction positive représente une aire sous la courbe.",
      "Si F est une primitive de f, alors ∫ₐᵇ f(x) dx = F(b) − F(a).",
      "L'intégration par parties vient de la formule (uv)′.",
    ],
    blocs: [
      {
        type: "formule",
        contenu: "∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) − F(a)",
        legende: "Primitive et calcul d'intégrale.",
      },
      {
        type: "formule",
        contenu: "∫ u′v = uv − ∫ uv′",
        legende: "Intégration par parties.",
      },
      {
        type: "exemple",
        titre: "Exemple guidé",
        contenu:
          "∫₀¹ x e^x dx : on pose u′ = e^x et v = x, donc ∫₀¹ x e^x dx = [x e^x]₀¹ − ∫₀¹ e^x dx = e − (e − 1) = 1.",
      },
    ],
  },
  {
    slug: "equations-differentielles",
    titre: "Équations différentielles",
    domaine: "Analyse",
    resume:
      "Résolution d'équations différentielles linéaires du premier ordre avec ou sans second membre.",
    duree: "40 min",
    rappels: [
      "Une équation différentielle relie une fonction à ses dérivées.",
      "y′ = ay a pour solutions y(x) = C e^(ax) avec C ∈ ℝ.",
      "On trouve une solution particulière, puis on ajoute la solution générale de l'équation homogène.",
    ],
    blocs: [
      {
        type: "formule",
        contenu: "y′ = ay + b  ⟹  y(x) = C e^(ax) − b/a",
        legende: "Solutions de y′ = ay + b (a ≠ 0).",
      },
      {
        type: "texte",
        contenu:
          "Pour y′ = ay + g(x), on cherche une solution particulière de la même forme que le second membre g(x).",
      },
      {
        type: "exemple",
        titre: "Exemple guidé",
        contenu:
          "Résoudre y′ = 2y + 4. L'équation homogène y′ = 2y donne C e^(2x). Une solution particulière constante est y = −2. La solution générale est y(x) = C e^(2x) − 2.",
      },
    ],
  },
  {
    slug: "variables-aleatoires",
    titre: "Variables aléatoires discrètes",
    domaine: "Probabilités",
    resume:
      "Loi d'une variable aléatoire, espérance, variance et écart-type d'une distribution discrète.",
    duree: "40 min",
    rappels: [
      "Une variable aléatoire associe un nombre à chaque issue d'une expérience aléatoire.",
      "L'espérance E(X) est la valeur moyenne pondérée par les probabilités.",
      "La variance mesure la dispersion autour de l'espérance.",
    ],
    blocs: [
      {
        type: "formule",
        contenu: "E(X) = Σ xᵢ pᵢ     V(X) = E(X²) − [E(X)]²",
        legende: "Espérance et variance d'une variable discrète.",
      },
      {
        type: "texte",
        contenu:
          "Pour une loi binomiale B(n ; p), on retrouve E(X) = np et V(X) = np(1 − p).",
      },
      {
        type: "exemple",
        titre: "Exemple guidé",
        contenu:
          "X prend les valeurs 1, 2 et 5 avec probabilités 0,5, 0,3 et 0,2. E(X) = 1×0,5 + 2×0,3 + 5×0,2 = 2,1.",
      },
    ],
  },
  {
    slug: "echantillonnage",
    titre: "Échantillonnage",
    domaine: "Probabilités",
    resume:
      "Fluctuation d'échantillonnage, intervalle de fluctuation et intervalle de confiance pour une proportion.",
    duree: "35 min",
    rappels: [
      "La proportion observée dans un échantillon varie d'un échantillon à l'autre.",
      "Pour n assez grand, la fréquence appartient à [p − 1/√n ; p + 1/√n] dans 95 % des cas.",
      "L'intervalle de confiance au seuil 95 % est [f − 1/√n ; f + 1/√n].",
    ],
    blocs: [
      {
        type: "formule",
        contenu: "I_f = [f − 1/√n ; f + 1/√n]",
        legende: "Intervalle de confiance à 95 % pour une proportion.",
      },
      {
        type: "texte",
        contenu:
          "On utilise l'intervalle de confiance pour estimer une proportion inconnue dans une population à partir d'un échantillon.",
      },
      {
        type: "exemple",
        titre: "Exemple guidé",
        contenu:
          "Sur n = 400 personnes, 52 % sont favorables. L'intervalle de confiance à 95 % est [0,52 − 1/20 ; 0,52 + 1/20] = [0,47 ; 0,57].",
      },
    ],
  },
  {
    slug: "orthogonalite-distance",
    titre: "Orthogonalité et distance",
    domaine: "Géométrie",
    resume:
      "Projections orthogonales, distance d'un point à un plan et à une droite dans l'espace.",
    duree: "40 min",
    rappels: [
      "La distance d'un point à un plan est la longueur du segment perpendiculaire au plan passant par le point.",
      "Le projeté orthogonal est le point du plan le plus proche du point donné.",
      "Deux droites de l'espace peuvent être orthogonales sans être sécantes.",
    ],
    blocs: [
      {
        type: "formule",
        contenu: "d(A, 𝒫) = |ax_A + by_A + cz_A + d| / √(a² + b² + c²)",
        legende: "Distance du point A au plan d'équation ax + by + cz + d = 0.",
      },
      {
        type: "texte",
        contenu:
          "Pour montrer qu'une droite est perpendiculaire à un plan, il suffit de prouver qu'elle est orthogonale à deux droites non parallèles du plan.",
      },
      {
        type: "exemple",
        titre: "Exemple guidé",
        contenu:
          "La distance du point A(1 ; 2 ; −1) au plan 2x − y + 2z + 3 = 0 est |2 − 2 − 2 + 3| / √(4 + 1 + 4) = 1/3.",
      },
    ],
  },
];

export const getChapitre = (slug: string) => chapitres.find((c) => c.slug === slug);
