export interface ShowcaseItem {
  id: string;
  num: string;
  name: string;
  subtitle: string;
  styleName: string;
  sector: string;
  vibe: string;
  fontFamilyName: string;
  palette: string[];
  keyFeatures: string[];
  themeColor: string;
  accentBg: string;
}

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "boucherie-roche",
    num: "01",
    name: "MAISON ROCHE & FILS",
    subtitle: "Maître Boucher Maturateur",
    styleName: "STYLE 01 — BRUTALISME TERROIR & ÉDITORIAL FORT",
    sector: "Boucherie, Charcuterie Artisanale & Salaisons",
    vibe: "Authenticité brute, respect absolu de la filière paysanne, grilles d'atelier apparentes et typographie de caractère inspirée de la presse du XXe siècle.",
    fontFamilyName: "Playfair Display + JetBrains Mono",
    palette: ["#F4EFE6", "#7A1C1C", "#141413", "#D9C9B4"],
    keyFeatures: ["Maturation Dry Aged 45 jours", "Grilles d'atelier 2px", "Click & Collect en boucherie"],
    themeColor: "#7A1C1C",
    accentBg: "#F4EFE6",
  },
  {
    id: "atelier-koma",
    num: "02",
    name: "ATELIER KOMA",
    subtitle: "Haute Coiffure & Soin Barbe",
    styleName: "STYLE 02 — MINIMALISME SUISSE PUR & ARCHITECTURAL",
    sector: "Salon de Coiffure & Barbier Architectural",
    vibe: "Clarté clinique, espace négatif généreux, géométrie rigoureuse, élégance intemporelle sans aucune fioriture inutile.",
    fontFamilyName: "Instrument Sans + Hairline Grid",
    palette: ["#FFFFFF", "#F3F3F3", "#000000", "#71717A"],
    keyFeatures: ["Espace négatif maîtrisé", "Prise de rendez-vous en 3 clics", "Lignes 1px de haute précision"],
    themeColor: "#000000",
    accentBg: "#FFFFFF",
  },
  {
    id: "le-feuillet",
    num: "03",
    name: "LE FEUILLET",
    subtitle: "Table de Saison & Vins Vivants",
    styleName: "STYLE 03 — IDENTITÉ FORTE, CHALEUREUSE & CONTEMPORAINE",
    sector: "Bistrot Gastronomique, Horeca & Cave Vivante",
    vibe: "Atmosphère feutrée, alliance de vert végétal sombre, de nuances cuivrées et de typographie sérif italique sensuelle et rythmée.",
    fontFamilyName: "Cormorant Garamond (Italique) + Sans",
    palette: ["#11221B", "#D96B43", "#F2E8DC", "#234035"],
    keyFeatures: ["Carte de saison interactive", "Réservation de table immédiate", "Focus vignerons & terroirs"],
    themeColor: "#D96B43",
    accentBg: "#11221B",
  },
  {
    id: "mie-farine",
    num: "04",
    name: "MIE & FARINE",
    subtitle: "Fournil Artisanal au Levain Naturel",
    styleName: "STYLE 04 — NEUTRE, ORGANIQUE & DOUX",
    sector: "Boulangerie de Meule, Levain Naturel & Pâtisserie",
    vibe: "Chaleur de la terre cuite, rondeur organique, douceur visuelle rassurante et transparence totale sur les farines de terroir.",
    fontFamilyName: "Instrument Sans + Plus Jakarta Sans",
    palette: ["#EAE3D5", "#3D312A", "#C88A4B", "#FAF7F2"],
    keyFeatures: ["Indicateur de fournée chaude en direct", "Guide des farines paysannes", "Réservation du pain du matin"],
    themeColor: "#C88A4B",
    accentBg: "#EAE3D5",
  },
  {
    id: "visionnaire",
    num: "05",
    name: "VISIONNAIRE STUDIO",
    subtitle: "Lunetterie Indépendante & Optométrie",
    styleName: "STYLE 05 — NÉO-BRUTALISME ACCENT & MARQUE AUDACIEUSE",
    sector: "Opticien Créateur, Lunetterie & Concept Store",
    vibe: "Énergie contemporaine, contrastes sans concession, ombres dures découpées, précision technique et posture avant-gardiste.",
    fontFamilyName: "Space Grotesk + Syne",
    palette: ["#E6E8EC", "#FACC15", "#1D4ED8", "#000000"],
    keyFeatures: ["Cotes millimétrées des montures", "Ombres dures 4px franches", "Bilan visuel sur-mesure"],
    themeColor: "#1D4ED8",
    accentBg: "#E6E8EC",
  },
];
