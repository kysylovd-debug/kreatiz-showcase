"use client";

import React, { useState } from "react";

export default function BoucherieRoche() {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [selectedCut, setSelectedCut] = useState<string>("cotedeboeuf");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const pieces = [
    {
      id: "cotedeboeuf",
      name: "Côte de Bœuf Simmental d'Alpage",
      category: "Bœuf d'Exception",
      price: "58.00 € / kg",
      badge: "Dry Aged 45 Jours",
      notes: "Persillé d'exception, affinage sur os en chambre froide avec sel d'Himalaya.",
      lot: "LOT-2026-SIMM",
    },
    {
      id: "fauxfilet",
      name: "Faux-Filet Aubrac Sélection Terroir",
      category: "Bœuf d'Exception",
      price: "42.50 € / kg",
      badge: "Maturation 28 Jours",
      notes: "Finesse de grain remarquable, herbage d'altitude garanti du plateau.",
      lot: "LOT-2026-AUBR",
    },
    {
      id: "patecroute",
      name: "Pâté en Croûte Richelieu & Pistaches",
      category: "Charcuterie Traiteur",
      price: "34.00 € / pièce",
      badge: "Médaille d'Or Artisanat",
      notes: "Pâte pur beurre feuilletée maison, farce fine de veau fermier et canard.",
      lot: "LOT-TRAIT-09",
    },
    {
      id: "saucisse",
      name: "Saucisse Sèche au Poivre Sauvage",
      category: "Salaison Séchée",
      price: "9.80 € / pièce",
      badge: "Boyau Naturel",
      notes: "Séchage 8 semaines en cave tempérée, porc fermier élevé en plein air.",
      lot: "LOT-SAL-41",
    },
  ];

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2400);
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="w-full bg-[#F4EFE6] text-[#141413] font-playfair selection:bg-[#7A1C1C] selection:text-[#F4EFE6] pb-24">
      {/* Top Ledger Strip */}
      <div className="bg-[#141413] text-[#F4EFE6] border-b-2 border-[#141413] px-6 py-2.5 flex items-center justify-between text-xs font-mono-code uppercase tracking-wider">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#7A1C1C]"></span>
          <span>Maison Fondée en 1938 • Artisanat Indépendant</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline">Traçabilité 100% Éleveurs Français</span>
          <div className="bg-[#7A1C1C] text-white px-3 py-1 font-semibold text-xs">
            Panier Étal : {totalItems} pièce{totalItems > 1 ? "s" : ""}
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div className="bg-[#7A1C1C] text-white py-2 px-4 text-center text-xs font-mono-code tracking-wide">
          ✓ Pièce réservée pour retrait à l&apos;étal sans attente.
        </div>
      )}

      {/* Main Butcher Header */}
      <header className="border-b-2 border-[#141413] px-8 sm:px-14 py-8 bg-[#F4EFE6]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono-code text-xs text-[#7A1C1C] uppercase tracking-widest font-bold">
              <span>Agrément Sanitaire 01.384.09</span>
              <span>•</span>
              <span>Maître Artisan</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none text-[#141413]">
              MAISON ROCHE <span className="font-normal italic text-[#7A1C1C]">& FILS</span>
            </h1>
            <p className="font-mono-code text-xs sm:text-sm text-[#554E45] mt-2 uppercase tracking-wide">
              Boucherie d’Abattage • Maturation sur Os • Salaisons de Tradition
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Authentic Stamp SVG */}
            <div className="w-20 h-20 border-2 border-[#7A1C1C] rounded-full p-1 flex items-center justify-center text-center shrink-0">
              <div className="w-full h-full border border-dashed border-[#7A1C1C] rounded-full flex flex-col items-center justify-center p-1 text-[8px] font-mono-code uppercase font-bold text-[#7A1C1C] leading-tight">
                <span>TERROIR</span>
                <span className="text-[11px] font-black my-0.5">100%</span>
                <span>CERTIFIÉ</span>
              </div>
            </div>

            <div className="text-right font-mono-code text-xs">
              <div className="font-bold text-[#141413]">HALLES DE L&apos;ÉCUSSON</div>
              <div className="text-[#554E45]">Mardi au Samedi : 07h30 — 19h30</div>
              <div className="text-[#7A1C1C] font-semibold mt-1">Tél. 04 67 92 14 00</div>
            </div>
          </div>
        </div>
      </header>

      {/* Editorial Hero Layout */}
      <section className="border-b-2 border-[#141413]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#141413]">
          {/* Left Hero Statement */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#7A1C1C] text-[#F4EFE6] px-3 py-1 font-mono-code text-xs uppercase tracking-wider mb-6">
                Chambre Froide de Sel d&apos;Himalaya • Hygrométrie 78%
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold leading-tight uppercase mb-6">
                Le temps est le premier ingrédient d’une viande d’exception.
              </h2>
              <p className="text-base sm:text-lg text-[#332E28] leading-relaxed mb-8 font-serif">
                Depuis trois générations, nous sélectionnons nos bêtes sur pied directement chez sept éleveurs partenaires du Jura et de l’Aubrac. Chaque bœuf est nourri au pâturage et affiné dans notre cave de sel pendant 30 à 60 jours pour sublimer ses arômes naturels.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 border-2 border-[#141413] p-4 bg-[#EDE5D8] font-mono-code text-xs text-center">
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#7A1C1C]">45 J</div>
                <div className="text-[10px] text-[#554E45] uppercase">Maturation minimale</div>
              </div>
              <div className="border-x border-[#141413]">
                <div className="text-xl sm:text-2xl font-black text-[#141413]">07</div>
                <div className="text-[10px] text-[#554E45] uppercase">Éleveurs partenaires</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#141413]">100%</div>
                <div className="text-[10px] text-[#554E45] uppercase">Découpe Atelier</div>
              </div>
            </div>
          </div>

          {/* Right Refined Anatomy Diagram */}
          <div className="lg:col-span-5 p-8 bg-[#EAE2D2] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#141413] pb-2 mb-4 font-mono-code text-xs">
                <span className="font-bold uppercase tracking-wider">Plan Anatomique de Découpe</span>
                <span className="text-[#7A1C1C] font-semibold">SÉLECTION EN DIRECT</span>
              </div>

              {/* Refined Silhouette Vector */}
              <div className="border-2 border-[#141413] bg-[#F4EFE6] p-4 mb-4">
                <svg viewBox="0 0 320 180" className="w-full h-auto" fill="none" stroke="#141413">
                  {/* Outline of cattle silhouette */}
                  <path
                    d="M 40 70 Q 55 45 90 45 L 140 48 Q 200 46 250 52 L 280 65 Q 295 80 285 110 L 285 150 L 265 150 L 260 115 L 210 118 L 205 150 L 185 150 L 190 118 L 130 118 L 125 150 L 105 150 L 110 115 L 75 115 L 70 150 L 50 150 L 55 100 Q 30 95 30 80 Z"
                    fill="#EDE5D8"
                    strokeWidth="1.8"
                  />
                  {/* Rib / Sirloin region highlighted */}
                  <path
                    d="M 140 48 L 195 47 L 195 90 L 135 90 Z"
                    fill={selectedCut === "cotedeboeuf" ? "#7A1C1C" : "#D9C9B4"}
                    stroke="#141413"
                    strokeWidth="1.5"
                    className="cursor-pointer transition-colors"
                    onClick={() => setSelectedCut("cotedeboeuf")}
                  />
                  {/* Rump / Fillet region */}
                  <path
                    d="M 195 47 L 250 52 L 245 95 L 195 90 Z"
                    fill={selectedCut === "fauxfilet" ? "#7A1C1C" : "#E2D5C3"}
                    stroke="#141413"
                    strokeWidth="1.5"
                    className="cursor-pointer transition-colors"
                    onClick={() => setSelectedCut("fauxfilet")}
                  />
                  {/* Labels positioned with comfortable padding */}
                  <text x="165" y="70" fontSize="8.5" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontWeight="bold">
                    CÔTE
                  </text>
                  <text x="220" y="72" fontSize="8" textAnchor="middle" fill="#141413" fontFamily="monospace">
                    FILET
                  </text>
                  <text x="85" y="80" fontSize="7.5" textAnchor="middle" fill="#554E45" fontFamily="monospace">
                    COLLIER
                  </text>
                  <text x="160" y="166" fontSize="7.5" textAnchor="middle" fill="#7A1C1C" fontFamily="monospace" fontWeight="bold">
                    [CLIQUEZ POUR CHANGER DE PIÈCE]
                  </text>
                </svg>
              </div>

              <div className="font-mono-code text-xs text-[#332E28] space-y-1 bg-[#F4EFE6] p-3 border border-[#141413]">
                <div className="text-[#7A1C1C] font-bold uppercase">
                  Morceau sélectionné : {selectedCut === "cotedeboeuf" ? "Côte de Bœuf Simmental" : "Faux-Filet Aubrac"}
                </div>
                <div className="text-[11px] text-[#554E45]">
                  Découpe manuelle au couteau d&apos;abatteur. Maturation lente sous température et hygrométrie contrôlées en continu.
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#141413] flex items-center justify-between text-xs font-mono-code">
              <span>Contrôle Vétérinaire A++</span>
              <span className="text-[#7A1C1C] font-bold">Origine France Garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pieces of the Day Board */}
      <section className="max-w-6xl mx-auto p-8 sm:p-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b-2 border-[#141413] gap-4">
          <div>
            <span className="font-mono-code text-xs font-bold text-[#7A1C1C] uppercase tracking-widest">
              Arrivage Frais & Cave de Maturation
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#141413] mt-1">
              Les Pièces Disponibles à l&apos;Étal Aujourd&apos;hui
            </h3>
          </div>
          <div className="font-mono-code text-xs text-[#554E45]">
            Mis à jour ce matin à 06h45 par Pierre Roche
          </div>
        </div>

        <div className="border-2 border-[#141413] bg-[#F4EFE6] divide-y-2 divide-[#141413]">
          {pieces.map((item) => (
            <div
              key={item.id}
              className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#EDE5D8] transition-colors"
            >
              <div className="md:w-1/2">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-[#7A1C1C] text-[#F4EFE6] font-mono-code text-[10px] font-bold px-2 py-0.5 uppercase">
                    {item.badge}
                  </span>
                  <span className="font-mono-code text-xs text-[#554E45]">
                    {item.lot}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-[#141413] uppercase tracking-wide">
                  {item.name}
                </h4>
                <p className="text-xs text-[#554E45] font-mono-code mt-1 leading-relaxed">
                  {item.notes}
                </p>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 md:w-1/2">
                <div className="text-right">
                  <div className="text-xl font-black text-[#141413] font-mono-code">
                    {item.price}
                  </div>
                  <div className="text-[10px] text-[#554E45] font-mono-code uppercase">
                    Poids selon découpe étal
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => addToCart(item.id)}
                  className="bg-[#141413] hover:bg-[#7A1C1C] text-[#F4EFE6] font-mono-code text-xs font-bold uppercase tracking-wider px-5 py-3 transition-colors cursor-pointer"
                >
                  {cart[item.id] ? `Ajouté (${cart[item.id]}) +` : "Réserver à l'étal"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 border-2 border-[#141413] divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#141413] bg-[#F4EFE6] font-mono-code text-xs">
          <div className="p-6">
            <h5 className="font-bold text-[#7A1C1C] uppercase mb-2">Boucherie des Halles</h5>
            <p className="text-[#332E28] leading-relaxed">
              Maison Roche & Fils<br />
              14, Place du Marché aux Bœufs<br />
              34000 Montpellier (Écusson)
            </p>
          </div>
          <div className="p-6">
            <h5 className="font-bold text-[#7A1C1C] uppercase mb-2">Horaires d&apos;Ouverture</h5>
            <p className="text-[#332E28] leading-relaxed">
              Mardi — Vendredi : 07h30 — 13h00 / 15h30 — 19h30<br />
              Samedi : 07h30 — 19h30 non-stop<br />
              Dimanche : 08h30 — 13h00
            </p>
          </div>
          <div className="p-6">
            <h5 className="font-bold text-[#7A1C1C] uppercase mb-2">Commandes Spéciales</h5>
            <p className="text-[#332E28] leading-relaxed">
              Pièces entières de fête & banquets :<br />
              <span className="font-bold text-[#141413]">Tél. direct : 04 67 92 14 00</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
