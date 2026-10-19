"use client";

import React, { useState } from "react";

export default function LeFeuillet() {
  const [activeTab, setActiveTab] = useState<"entrees" | "plats" | "desserts" | "vins">("entrees");
  const [covers, setCovers] = useState<number>(2);
  const [service, setService] = useState<string>("Dîner — 20h15");
  const [tableReserved, setTableReserved] = useState(false);

  const menu = {
    entrees: [
      {
        name: "Cèpes de Châtaigneraie Juste Poêlés",
        desc: "Jaune d'œuf confit au foin, émulsion de noisettes torréfiées et tuile de sarrasin croustillante.",
        price: "22 €",
        provenance: "Forêt d'Othe (Cueillette du matin)",
      },
      {
        name: "Tartare de Truite de Ruisseau Fumée au Genévrier",
        desc: "Radis noir mariné au vinaigre de sureau, oxalis sauvage et crème crue de la ferme voisine.",
        price: "19 €",
        provenance: "Vivier des Sources de l'Armançon",
      },
      {
        name: "Consommé Chaud de Racines Anciennes",
        desc: "Cerfeuil tubéreux, panais rôti au miel sauvage, huile d'aneth pressée à froid.",
        price: "17 €",
        provenance: "Maraîchage bio Les Trois Terres",
      },
    ],
    plats: [
      {
        name: "Pigeon de Bresse Rôti sur le Coffre",
        desc: "Les cuisses confites en pastilla d'herbes folles, purée de topinambours fumés et jus corsé au genièvre.",
        price: "38 €",
        provenance: "Élevage Miéral, Montrevel-en-Bresse",
      },
      {
        name: "Omble Chevalier Glacé au Beurre Noisette",
        desc: "Fenouil sauvage braisé, tombée d'épinards de pleine terre et sabayon aérien au vin jaune.",
        price: "36 €",
        provenance: "Pêche artisanale du Léman",
      },
      {
        name: "Potimarron Épicé Cuit en Croûte de Sel d'Algues",
        desc: "Prunelles sauvages confites, émulsion de lentilles vertes de pays et graines de courge caramélisées.",
        price: "28 €",
        provenance: "Ferme Agroécologique du Moulin",
      },
    ],
    desserts: [
      {
        name: "Poire Confite au Vin Chaud & Poivre de Kampot",
        desc: "Glace au levain toasté, crumble de noix fraîches et réduction de moût de raisin.",
        price: "15 €",
        provenance: "Vergers de Saint-Julien",
      },
      {
        name: "Chocolat Noir Sauvage 75% & Cèpes Cristallisés",
        desc: "Ganache soyeuse, fleur de sel de Guérande et sorbet vivifiant à la livèche.",
        price: "16 €",
        provenance: "Fèves Criollo pures origines",
      },
    ],
    vins: [
      {
        name: "Domaine Valette — Mâcon-Chaintré 2021",
        desc: "Chardonnay d'orfèvre, 36 mois d'élevage sur lies. Notes d'agrumes confits, tension minérale remarquable.",
        price: "64 € le flacon",
        provenance: "Bourgogne Sud • Sans intrant",
      },
      {
        name: "Yvon Métras — Fleurie Printemps 2023",
        desc: "Gamay noir à jus blanc, vendanges manuelles. Éclat de fruits rouges vivants, soyeux incomparable.",
        price: "72 € le flacon",
        provenance: "Beaujolais • Vin naturel mythique",
      },
      {
        name: "Domaine de la Tournelle — Les Corvées sous Curon 2020",
        desc: "Savagnin ouillé vibrant, grande énergie tellurique, finale saline et épicée infinie.",
        price: "85 € le flacon",
        provenance: "Arbois, Jura • Biodynamie certifiée",
      },
    ],
  };

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setTableReserved(true);
    setTimeout(() => setTableReserved(false), 4500);
  };

  return (
    <div className="w-full bg-[#11221B] text-[#F2E8DC] font-cormorant selection:bg-[#D96B43] selection:text-[#11221B] pb-20">
      {/* Editorial Announcement Bar */}
      <div className="bg-[#0A1611] text-[#D96B43] px-6 py-2 border-b border-[#234035] text-xs uppercase tracking-[0.25em] flex justify-between items-center font-mono-code">
        <span>Arrivage Quotidien • 100% Produits de Saison</span>
        <span className="hidden sm:inline">Cave Vivante : 240 Références d&apos;Auteurs</span>
        <span>Service Soir : 19h30 — 23h00</span>
      </div>

      {/* Main Brand Header */}
      <header className="px-8 sm:px-14 py-10 border-b border-[#234035] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="block text-xs font-mono-code uppercase tracking-[0.3em] text-[#D96B43] mb-1">
            Table d&apos;Hôtes & Vins Vivants
          </span>
          <h1 className="text-4xl sm:text-6xl font-normal italic tracking-tight text-[#F2E8DC]">
            Le Feuillet
          </h1>
        </div>

        {/* Botanical SVG Motif */}
        <div className="flex items-center gap-6">
          <svg viewBox="0 0 80 40" className="w-20 h-10 stroke-[#D96B43] fill-none" strokeWidth="1">
            <path d="M 10 20 Q 30 5 40 20 T 70 20" />
            <path d="M 40 20 Q 45 10 50 20" />
            <circle cx="20" cy="18" r="2" fill="#D96B43" />
            <circle cx="60" cy="22" r="2" fill="#D96B43" />
          </svg>

          <a
            href="#table-booking"
            className="border border-[#D96B43] text-[#D96B43] hover:bg-[#D96B43] hover:text-[#11221B] px-5 py-2.5 text-xs font-mono-code uppercase tracking-widest transition-all"
          >
            Réserver une Table
          </a>
        </div>
      </header>

      {/* Hero Atmosphere */}
      <section className="px-8 sm:px-14 py-16 sm:py-24 border-b border-[#234035] bg-[#142820]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono-code text-[#D96B43] uppercase tracking-[0.25em] mb-4 block">
              La Cuisine du Vivant & du Geste
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal leading-[1.15] italic mb-6">
              « Nous cuisinons ce que la terre nous offre ce matin, sans artifice ni faux-semblant. »
            </h2>
            <p className="text-base sm:text-xl font-light leading-relaxed text-[#D2C8BC] max-w-xl">
              Ici, pas de carte figée à l’année. Notre chef et notre sommelière arpentent les fermes, sous-bois et coteaux voisins chaque semaine. Les cuissons au feu de bois réveillent la sève des légumes et le caractère des bêtes élevées avec dignité.
            </p>
          </div>

          <div className="lg:col-span-5 border border-[#234035] p-6 bg-[#0E1C16]">
            <div className="flex items-center justify-between border-b border-[#234035] pb-3 mb-4 text-xs font-mono-code text-[#D96B43]">
              <span>MENU DÉGUSTATION EN 4 TEMPS</span>
              <span>58 €</span>
            </div>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-baseline justify-between gap-4">
                <span className="italic">1. Bouillon sauvage & racine rôtie</span>
                <span className="text-[#D96B43] text-xs font-mono-code">Mise en bouche</span>
              </li>
              <li className="flex items-baseline justify-between gap-4">
                <span className="italic">2. Cèpes de châtaigneraie au foin</span>
                <span className="text-[#D96B43] text-xs font-mono-code">Entrée</span>
              </li>
              <li className="flex items-baseline justify-between gap-4">
                <span className="italic">3. Pigeon de Bresse ou Omble du Léman</span>
                <span className="text-[#D96B43] text-xs font-mono-code">Grand Plat</span>
              </li>
              <li className="flex items-baseline justify-between gap-4">
                <span className="italic">4. Poire sauvage, vin chaud & levain</span>
                <span className="text-[#D96B43] text-xs font-mono-code">Douceur</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-[#234035] text-xs font-mono-code text-[#A69E92] flex justify-between">
              <span>Accord 4 Flacons Vivants : +38 €</span>
              <span className="text-[#D96B43]">Réservation conseillée</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Seasonal Menu */}
      <section className="px-8 sm:px-14 py-20 border-b border-[#234035]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono-code uppercase tracking-[0.3em] text-[#D96B43] block mb-2">
              L&apos;Ardoise Éphémère
            </span>
            <h3 className="text-3xl sm:text-4xl font-normal italic">
              La Carte de cette Semaine
            </h3>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(
              [
                ["entrees", "Entrées Végétales & Bouillons"],
                ["plats", "Plats de Braise & Pêche Douce"],
                ["desserts", "Desserts & Douceurs"],
                ["vins", "La Cave des Vignerons"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2.5 text-xs font-mono-code uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === key
                    ? "bg-[#D96B43] text-[#11221B] font-bold"
                    : "border border-[#234035] text-[#D2C8BC] hover:border-[#D96B43]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="divide-y divide-[#234035] border-y border-[#234035]">
            {menu[activeTab].map((item, idx) => (
              <div key={idx} className="py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <h4 className="text-xl sm:text-2xl font-normal italic text-[#F2E8DC]">
                      {item.name}
                    </h4>
                    <span className="text-xs font-mono-code text-[#D96B43]">
                      [{item.provenance}]
                    </span>
                  </div>
                  <p className="mt-1 text-sm sm:text-base font-light text-[#D2C8BC] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-lg font-mono-code text-[#D96B43]">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table Booking Module */}
      <section id="table-booking" className="px-8 sm:px-14 py-20 border-b border-[#234035] bg-[#0E1C16]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono-code text-[#D96B43] uppercase tracking-[0.25em] block mb-2">
              L&apos;Hospitalité au Coin du Feu
            </span>
            <h3 className="text-3xl sm:text-4xl italic font-normal">
              Réserver votre Table
            </h3>
          </div>

          <form onSubmit={handleReservation} className="border border-[#234035] p-8 bg-[#11221B]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-xs font-mono-code text-[#D96B43] uppercase tracking-wider mb-2">
                  Nombre de Couverts
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[2, 4, 6, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setCovers(num)}
                      className={`py-2 text-xs font-mono-code transition-colors cursor-pointer ${
                        covers === num
                          ? "bg-[#D96B43] text-[#11221B] font-bold"
                          : "border border-[#234035] text-[#D2C8BC] hover:border-[#D96B43]"
                      }`}
                    >
                      {num} {num === 2 ? "pers." : "p."}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-[#D96B43] uppercase tracking-wider mb-2">
                  Date du Repas
                </label>
                <select className="w-full bg-[#0E1C16] border border-[#234035] text-xs font-mono-code text-[#F2E8DC] p-2.5 focus:outline-none focus:border-[#D96B43]">
                  <option>Vendredi 24 Octobre</option>
                  <option>Samedi 25 Octobre</option>
                  <option>Dimanche 26 Octobre (Midi)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-[#D96B43] uppercase tracking-wider mb-2">
                  Service & Heure
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Déjeuner — 12h30", "Dîner — 20h15"].map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setService(srv)}
                      className={`py-2 text-[10px] font-mono-code transition-colors cursor-pointer ${
                        service === srv
                          ? "bg-[#D96B43] text-[#11221B] font-bold"
                          : "border border-[#234035] text-[#D2C8BC] hover:border-[#D96B43]"
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#234035] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono-code text-[#A69E92]">
                Table pour {covers} hôtes ({service}) • Confirmation immédiate
              </div>

              {tableReserved ? (
                <div className="bg-[#D96B43] text-[#11221B] px-6 py-3 font-mono-code text-xs uppercase font-bold tracking-wider">
                  ✓ Table réservée avec soin. Nous vous attendons.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#D96B43] hover:bg-[#c25a34] text-[#11221B] px-8 py-3 text-xs font-mono-code uppercase tracking-widest font-bold transition-colors cursor-pointer"
                >
                  Confirmer la Réservation
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Restaurant Address & Cellar Info */}
      <footer className="max-w-5xl mx-auto px-8 sm:px-14 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-mono-code text-[#A69E92]">
        <div>
          <h5 className="text-[#D96B43] uppercase tracking-widest mb-3 font-bold">L&apos;Établissement</h5>
          <p className="leading-relaxed">
            Auberge Le Feuillet<br />
            7, Chemin des Vignes Sauvages<br />
            21200 Beaune, Bourgogne
          </p>
        </div>
        <div>
          <h5 className="text-[#D96B43] uppercase tracking-widest mb-3 font-bold">Services & Accueil</h5>
          <p className="leading-relaxed">
            Jeudi au Dimanche : Midi (12h-14h30)<br />
            Mercredi au Samedi : Soir (19h30-23h00)<br />
            Lundi & Mardi : En forêt & chez les vignerons
          </p>
        </div>
        <div>
          <h5 className="text-[#D96B43] uppercase tracking-widest mb-3 font-bold">Ligne de la Table</h5>
          <p className="leading-relaxed">
            Tél : 03 80 22 41 90<br />
            Email : table@lefeuillet-restaurant.fr<br />
            Terrasse ombragée aux beaux jours
          </p>
        </div>
      </footer>
    </div>
  );
}
