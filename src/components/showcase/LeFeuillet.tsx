"use client";

import React, { useState } from "react";

export default function LeFeuillet() {
  const [activeCourse, setActiveCourse] = useState<"carte" | "degustation" | "vins">("carte");
  const [covers, setCovers] = useState<number>(2);
  const [service, setService] = useState<string>("Dîner (20h15)");
  const [tableReserved, setTableReserved] = useState(false);

  const entrees = [
    {
      name: "Cèpes de Châtaigneraie Rôtis au Foin",
      desc: "Jaune d'œuf de ferme confit, crème de noisettes sauvages torréfiées et tuile croustillante de sarrasin.",
      price: "24 €",
    },
    {
      name: "Omble Chevalier du Léman Fumé au Genévrier",
      desc: "Radis noir mariné au vinaigre de sureau, oxalis des sous-bois et crème crue fermière battue.",
      price: "21 €",
    },
    {
      name: "Velouté Chaud de Cerfeuil Tubéreux & Racines Anciennes",
      desc: "Panais caramélisé au miel de forêt, huile d'aneth fraîchement pressée à froid.",
      price: "18 €",
    },
  ];

  const plats = [
    {
      name: "Pigeon de Bresse Rôti sur le Coffre",
      desc: "Les cuisses confites en pastilla d'herbes folles, mousseline de topinambours fumés et réduction de genièvre.",
      price: "42 €",
    },
    {
      name: "Bar Sauvage Glacé au Beurre Noisette",
      desc: "Fenouil sauvage braisé à la braise de chêne, tombée d'épinards de pleine terre et sabayon soyeux au vin jaune.",
      price: "39 €",
    },
    {
      name: "Potimarron Bio Cuit en Croûte de Sel d'Algues",
      desc: "Prunelles sauvages compotées, lentilles vertes de pays émulsionnées et graines torréfiées.",
      price: "31 €",
    },
  ];

  const desserts = [
    {
      name: "Poire Confite au Moût de Raisin & Poivre de Kampot",
      desc: "Glace au levain toasté de notre boulanger, crumble sablé aux noix de pays.",
      price: "16 €",
    },
    {
      name: "Chocolat Grand Cru 75% & Cèpes Cristallisés",
      desc: "Ganache soyeuse à la fleur de sel, sorbet vivifiant à la livèche fraîche.",
      price: "17 €",
    },
  ];

  const vins = [
    {
      name: "Domaine Valette — Mâcon-Chaintré",
      vintage: "Millésime 2021",
      notes: "Chardonnay d'orfèvre, 36 mois d'élevage sur lies fines. Notes d'agrumes confits et tension minérale saline.",
      price: "68 €",
    },
    {
      name: "Yvon Métras — Fleurie Printemps",
      vintage: "Millésime 2023",
      notes: "Gamay sur granite, vendanges manuelles entières. Éclat pur de fruits noirs et velouté incomparable.",
      price: "76 €",
    },
    {
      name: "Domaine de la Tournelle — Les Corvées sous Curon",
      vintage: "Millésime 2020",
      notes: "Savagnin ouillé du Jura en biodynamie. Grande énergie tellurique, finale persistante et épicée.",
      price: "88 €",
    },
  ];

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setTableReserved(true);
    setTimeout(() => setTableReserved(false), 4500);
  };

  return (
    <div className="w-full bg-[#12211A] text-[#F3ECE2] font-cormorant selection:bg-[#C9A86A] selection:text-[#12211A] pb-24">
      {/* Top Refined Bar */}
      <div className="border-b border-[#22382C] px-6 py-3 flex items-center justify-between text-xs tracking-[0.25em] text-[#C9A86A] uppercase font-sans">
        <span>Table de Saison & Vins Vivants</span>
        <span className="hidden sm:inline">Approvisionnement à moins de 40 km</span>
        <span>Beaune • Bourgogne</span>
      </div>

      {/* Hero Section — Centered Fine Dining Editorial */}
      <header className="px-6 sm:px-16 pt-20 pb-16 text-center max-w-4xl mx-auto border-b border-[#22382C]">
        {/* Delicate Botanical Emblem */}
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <svg viewBox="0 0 60 60" className="w-full h-full stroke-[#C9A86A] fill-none" strokeWidth="1.2">
            <circle cx="30" cy="30" r="26" strokeDasharray="2 3" strokeOpacity="0.6" />
            <path d="M 30 14 C 24 22 24 38 30 46 C 36 38 36 22 30 14 Z" />
            <path d="M 22 30 C 26 26 34 26 38 30" />
            <circle cx="30" cy="30" r="2" fill="#C9A86A" />
          </svg>
        </div>

        <span className="text-xs uppercase tracking-[0.35em] text-[#C9A86A] block mb-3 font-sans">
          Auberge Gastronomique
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight text-[#F3ECE2] leading-tight mb-8">
          Le Feuillet
        </h1>

        <p className="text-lg sm:text-2xl font-light italic leading-relaxed text-[#DCD1C2] max-w-2xl mx-auto mb-10">
          « Ce que la terre et les sous-bois nous ont confié ce matin, nous vous le servons ce soir dans la chaleur du feu de bois. »
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] font-sans text-[#C9A86A]">
          <a
            href="#table"
            className="border border-[#C9A86A] px-6 py-3 hover:bg-[#C9A86A] hover:text-[#12211A] transition-colors"
          >
            Réserver une Table
          </a>
          <a
            href="#carte"
            className="border border-transparent hover:border-[#22382C] px-6 py-3 text-[#DCD1C2] hover:text-[#F3ECE2] transition-colors"
          >
            Découvrir la Carte
          </a>
        </div>
      </header>

      {/* Menu Navigation Tabs */}
      <section id="carte" className="px-6 sm:px-16 pt-16 pb-20 max-w-4xl mx-auto border-b border-[#22382C]">
        <div className="flex items-center justify-center gap-8 mb-16 text-sm uppercase tracking-[0.25em] font-sans border-b border-[#22382C] pb-6">
          <button
            type="button"
            onClick={() => setActiveCourse("carte")}
            className={`pb-2 transition-colors cursor-pointer ${
              activeCourse === "carte"
                ? "text-[#C9A86A] border-b-2 border-[#C9A86A]"
                : "text-[#8E9B93] hover:text-[#F3ECE2]"
            }`}
          >
            La Carte Vivante
          </button>
          <button
            type="button"
            onClick={() => setActiveCourse("degustation")}
            className={`pb-2 transition-colors cursor-pointer ${
              activeCourse === "degustation"
                ? "text-[#C9A86A] border-b-2 border-[#C9A86A]"
                : "text-[#8E9B93] hover:text-[#F3ECE2]"
            }`}
          >
            Menu Dégustation
          </button>
          <button
            type="button"
            onClick={() => setActiveCourse("vins")}
            className={`pb-2 transition-colors cursor-pointer ${
              activeCourse === "vins"
                ? "text-[#C9A86A] border-b-2 border-[#C9A86A]"
                : "text-[#8E9B93] hover:text-[#F3ECE2]"
            }`}
          >
            Cave des Vignerons
          </button>
        </div>

        {/* Course 1: La Carte */}
        {activeCourse === "carte" && (
          <div className="space-y-16 animate-in fade-in duration-300">
            {/* Entrées */}
            <div>
              <h3 className="text-center text-xs uppercase tracking-[0.3em] font-sans text-[#C9A86A] mb-8 pb-2 border-b border-[#22382C] w-48 mx-auto">
                Entrées de Saison
              </h3>
              <div className="space-y-8">
                {entrees.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                    <div className="max-w-xl">
                      <div className="text-xl sm:text-2xl font-normal italic text-[#F3ECE2]">
                        {item.name}
                      </div>
                      <p className="text-sm font-light text-[#BBB0A0] leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                    <div className="text-lg font-normal text-[#C9A86A] sm:text-right shrink-0">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Plats */}
            <div className="pt-8 border-t border-[#22382C]">
              <h3 className="text-center text-xs uppercase tracking-[0.3em] font-sans text-[#C9A86A] mb-8 pb-2 border-b border-[#22382C] w-48 mx-auto">
                Plats de Braise & Pêche
              </h3>
              <div className="space-y-8">
                {plats.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                    <div className="max-w-xl">
                      <div className="text-xl sm:text-2xl font-normal italic text-[#F3ECE2]">
                        {item.name}
                      </div>
                      <p className="text-sm font-light text-[#BBB0A0] leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                    <div className="text-lg font-normal text-[#C9A86A] sm:text-right shrink-0">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desserts */}
            <div className="pt-8 border-t border-[#22382C]">
              <h3 className="text-center text-xs uppercase tracking-[0.3em] font-sans text-[#C9A86A] mb-8 pb-2 border-b border-[#22382C] w-48 mx-auto">
                Douceurs de Cueillette
              </h3>
              <div className="space-y-8">
                {desserts.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                    <div className="max-w-xl">
                      <div className="text-xl sm:text-2xl font-normal italic text-[#F3ECE2]">
                        {item.name}
                      </div>
                      <p className="text-sm font-light text-[#BBB0A0] leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                    <div className="text-lg font-normal text-[#C9A86A] sm:text-right shrink-0">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Course 2: Menu Dégustation */}
        {activeCourse === "degustation" && (
          <div className="border border-[#22382C] p-8 sm:p-12 text-center max-w-2xl mx-auto bg-[#0E1B15] animate-in fade-in duration-300">
            <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C9A86A] block mb-2">
              Le Voyage en 4 Services
            </span>
            <div className="text-3xl sm:text-4xl italic text-[#F3ECE2] mb-4">
              Menu Confiance du Chef
            </div>
            <div className="text-2xl font-normal text-[#C9A86A] mb-8">
              64 € par convive
            </div>

            <div className="space-y-6 text-base font-light italic text-[#DCD1C2] border-y border-[#22382C] py-8 mb-8">
              <div>Consommé de racines anciennes & herbes sauvages du matin</div>
              <div>•</div>
              <div>Cèpes de châtaigneraie rôtis au foin & jaune d&apos;œuf confit</div>
              <div>•</div>
              <div>Pigeon de Bresse sur le coffre ou Omble chevalier glacé</div>
              <div>•</div>
              <div>Poire confite au moût de raisin & glace au levain toasté</div>
            </div>

            <p className="text-xs font-sans text-[#8E9B93] tracking-wider uppercase">
              Accord Mets & Vins Vivants (4 verres) : +38 €
            </p>
          </div>
        )}

        {/* Course 3: Cave */}
        {activeCourse === "vins" && (
          <div className="space-y-8 max-w-2xl mx-auto animate-in fade-in duration-300">
            {vins.map((vin, idx) => (
              <div key={idx} className="border-b border-[#22382C] pb-6 flex items-baseline justify-between gap-4">
                <div>
                  <div className="text-2xl italic text-[#F3ECE2]">{vin.name}</div>
                  <div className="text-xs font-sans text-[#C9A86A] uppercase tracking-widest mt-1">
                    {vin.vintage}
                  </div>
                  <p className="text-sm font-light text-[#BBB0A0] mt-2 leading-relaxed">
                    {vin.notes}
                  </p>
                </div>
                <div className="text-xl text-[#C9A86A] shrink-0 font-normal">
                  {vin.price}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Reservation Module */}
      <section id="table" className="px-6 sm:px-16 pt-16 max-w-3xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] font-sans text-[#C9A86A] block mb-3">
          Hospitalité & Accueil
        </span>
        <h2 className="text-3xl sm:text-4xl italic text-[#F3ECE2] mb-10">
          Réserver votre Table
        </h2>

        <form onSubmit={handleReservation} className="border border-[#22382C] p-8 sm:p-10 bg-[#0E1B15] text-left">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#C9A86A] font-sans mb-3">
                Nombre de convives
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[2, 4, 6, 8].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setCovers(num)}
                    className={`py-2 text-xs font-sans uppercase transition-colors cursor-pointer ${
                      covers === num
                        ? "bg-[#C9A86A] text-[#12211A] font-bold"
                        : "border border-[#22382C] text-[#DCD1C2] hover:border-[#C9A86A]"
                    }`}
                  >
                    {num} p.
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#C9A86A] font-sans mb-3">
                Service souhaité
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Déjeuner (12h30)", "Dîner (20h15)"].map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => setService(srv)}
                    className={`py-2 text-[10px] font-sans uppercase transition-colors cursor-pointer ${
                      service === srv
                        ? "bg-[#C9A86A] text-[#12211A] font-bold"
                        : "border border-[#22382C] text-[#DCD1C2] hover:border-[#C9A86A]"
                    }`}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#C9A86A] font-sans mb-3">
                Date de visite
              </label>
              <select className="w-full bg-[#12211A] border border-[#22382C] text-xs font-sans text-[#F3ECE2] p-2.5 focus:outline-none focus:border-[#C9A86A]">
                <option>Vendredi 24 Octobre</option>
                <option>Samedi 25 Octobre</option>
                <option>Dimanche 26 Octobre</option>
              </select>
            </div>
          </div>

          <div className="pt-6 border-t border-[#22382C] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-sans text-[#8E9B93]">
              Table pour {covers} personnes • {service}
            </span>

            {tableReserved ? (
              <div className="bg-[#C9A86A] text-[#12211A] px-6 py-2.5 text-xs font-sans uppercase font-bold tracking-widest">
                ✓ Table confirmée avec attention.
              </div>
            ) : (
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#C9A86A] hover:bg-[#b89556] text-[#12211A] px-8 py-3 text-xs font-sans uppercase tracking-[0.2em] font-bold transition-colors cursor-pointer"
              >
                Confirmer la réservation
              </button>
            )}
          </div>
        </form>

        <div className="mt-16 text-xs font-sans text-[#8E9B93] space-y-2">
          <div>Auberge Le Feuillet • 7, Chemin des Vignes Sauvages, 21200 Beaune</div>
          <div>Ouvert du jeudi au dimanche midi et soir • Réservations au 03 80 22 41 90</div>
        </div>
      </section>
    </div>
  );
}
