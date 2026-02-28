// Site estático (sem React) - gerado a partir do App.jsx
const PALETTE = {
  orange: "#D95B31",
  blue: "#609CD2",
  navy: "#1E3658",
  ink: "#0B1220",
  bg: "#F6F8FB",
  card: "#FFFFFF",
  line: "rgba(11,18,32,0.10)",
};

const SOURCES = {
  visualCapitalist:
    "https://www.visualcapitalist.com/the-critical-minerals-powering-the-ai-boom/?mc_cid=828e30ab98&mc_eid=d1f0a9913e",
  usgsKeyMinerals:
    "https://www.usgs.gov/media/images/key-minerals-data-centers-infographic",
  cochraneSilverInfected:
    "https://www.cochrane.org/evidence/CD005486_topical-silver-treating-infected-wounds",
  woundsInternationalSilverConsensus:
    "https://woundsinternational.com/consensus-documents/international-consensus-appropriate-use-silver-dressings-wounds-english-en/",
  softSiliconeMadeEasyPdf:
    "https://woundsinternational.com/wp-content/uploads/2023/02/c6c17c8108884b42545f060eabc1d29f.pdf",
  charcoalSilverStudyPubMed:
    "https://pubmed.ncbi.nlm.nih.gov/15575569/",
  copperOxideDressingsPubMed:
    "https://pubmed.ncbi.nlm.nih.gov/25901580/",
};

const minerals = [
  {
    mineral: "Prata (Ag)",
    emDataCenter: [
      "Contato elétrico/condutividade em componentes",
      "Conexões e interfaces de alta performance (uso pontual)",
    ],
    emFeridas: [
      "Curativos impregnados (espumas, alginatos, hidrofibras)",
      "Ação antimicrobiana/controle de bioburden; uso racional (tempo e indicação clínica)",
    ],
    evidencia: [
      {
        label: "Consenso de uso (Wounds International)",
        href: SOURCES.woundsInternationalSilverConsensus,
      },
      {
        label: "Cochrane (evidência/limitações)",
        href: SOURCES.cochraneSilverInfected,
      },
    ],
    tag: { text: "USO FORTE em curativos", color: PALETTE.orange },
  },
  {
    mineral: "Cobre (Cu)",
    emDataCenter: [
      "Cabos, barramentos e conectores (condutor central)",
      "Infraestrutura elétrica e de refrigeração (equipamentos e instalações)",
    ],
    emFeridas: [
      "Curativos/tecidos impregnados com óxido de cobre (antimicrobiano)",
      "Potencial suporte à angiogênese e regeneração (linha de pesquisa/uso em expansão)",
    ],
    evidencia: [
      {
        label: "Dressings com óxido de cobre (PubMed)",
        href: SOURCES.copperOxideDressingsPubMed,
      },
    ],
    tag: { text: "USO EM EXPANSÃO", color: PALETTE.blue },
  },
  {
    mineral: "Silício (Si) → Silicone médico",
    emDataCenter: [
      "Base de semicondutores (chips)",
      "Eletrônica de potência e processamento",
    ],
    emFeridas: [
      "Camada de contato/adesivo de silicone (atraumático)",
      "Reduz dor e trauma na troca; protege pele perilesional",
    ],
    evidencia: [
      {
        label: "Soft silicone dressings (Wounds International – PDF)",
        href: SOURCES.softSiliconeMadeEasyPdf,
      },
    ],
    tag: { text: "USO CONSOLIDADO (material)", color: PALETTE.navy },
  },
  {
    mineral: "Carbono (C) / Grafite → Carvão ativado",
    emDataCenter: [
      "Grafite em baterias (ânodo) e gestão energética",
      "Materiais e compósitos (dependendo do sistema)",
    ],
    emFeridas: [
      "Curativos com carvão ativado (controle de odor/adsorção)",
      "Versões combinadas com prata para odor + controle microbiano",
    ],
    evidencia: [
      { label: "Carvão ativado + prata (PubMed)", href: SOURCES.charcoalSilverStudyPubMed },
    ],
    tag: { text: "USO PRAGMÁTICO (odor)", color: PALETTE.blue },
  },
  {
    mineral: "Níquel (Ni)",
    emDataCenter: [
      "Baterias e ligas (uso indireto)",
      "Componentes estruturais (dependendo do equipamento)",
    ],
    emFeridas: ["Não é usado como ativo em curativos (risco de alergia/irritação)."],
    evidencia: [],
    tag: { text: "SEM USO DIRETO", color: "rgba(11,18,32,0.45)" },
  },
  {
    mineral: "Cobalto (Co)",
    emDataCenter: ["Baterias (cadeias de energia e UPS)", "Materiais especiais (uso indireto)"],
    emFeridas: ["Não é usado como ativo em curativos de feridas crônicas."],
    evidencia: [],
    tag: { text: "SEM USO DIRETO", color: "rgba(11,18,32,0.45)" },
  },
  {
    mineral: "Terras raras (ex.: neodímio)",
    emDataCenter: [
      "Ímãs permanentes em motores/ventiladores e alguns sistemas",
      "Equipamentos e acionamentos",
    ],
    emFeridas: ["Sem aplicação típica em curativos (uso é mais em hardware/dispositivos)."],
    evidencia: [],
    tag: { text: "INDIRETO (equip.)", color: "rgba(11,18,32,0.45)" },
  },
  {
    mineral: "Estanho / Tântalo / Tungstênio (Sn/Ta/W)",
    emDataCenter: ["Soldas, capacitores e eletrônica (componentes)", "Alta confiabilidade em circuitos"],
    emFeridas: ["Sem aplicação típica em coberturas para feridas crônicas."],
    evidencia: [],
    tag: { text: "ELETRÔNICA, NÃO CURATIVO", color: "rgba(11,18,32,0.45)" },
  },
];

const MINI_ELEMS = [
  { s: "Ag", n: "Prata", c: PALETTE.orange, u: "curativo antimicrobiano" },
  { s: "Cu", n: "Cobre", c: PALETTE.blue, u: "óxido de cobre (em expansão)" },
  { s: "Si", n: "Silício", c: PALETTE.navy, u: "silicone médico (atraumático)" },
  { s: "C", n: "Carbono", c: PALETTE.blue, u: "carvão ativado (odor)" },
  { s: "Ni", n: "Níquel", c: "rgba(11,18,32,0.45)", u: "sem uso típico em curativos" },
  { s: "Co", n: "Cobalto", c: "rgba(11,18,32,0.45)", u: "sem uso típico em curativos" },
  { s: "Sn", n: "Estanho", c: "rgba(11,18,32,0.45)", u: "soldas / eletrônica" },
  { s: "Ta", n: "Tântalo", c: "rgba(11,18,32,0.45)", u: "capacitores" },
  { s: "W", n: "Tungstênio", c: "rgba(11,18,32,0.45)", u: "alta confiabilidade" },
];

function setLink(id, href, label) {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = href;
  el.textContent = label || href;
}

function renderMiniTable() {
  const root = document.getElementById("miniTable");
  if (!root) return;

  root.innerHTML = MINI_ELEMS.map(e => {
    const bg = `linear-gradient(135deg, ${e.c}22, transparent 55%)`;
    return `
      <div class="elem" title="${escapeHtml(e.u)}">
        <div class="elem-bg" style="background:${bg}"></div>
        <div class="elem-content">
          <div class="elem-sym">${escapeHtml(e.s)}</div>
          <div class="elem-name">${escapeHtml(e.n)}</div>
          <div class="elem-use">${escapeHtml(e.u)}</div>
        </div>
      </div>
    `;
  }).join("");
}

function renderMinerals() {
  const root = document.getElementById("mineralsGrid");
  if (!root) return;

  root.innerHTML = minerals.map(m => {
    // Presença de conteúdo (para a bolinha “data center × feridas”)
    const dcList = Array.isArray(m.emDataCenter) ? m.emDataCenter : [];
    const fwList = Array.isArray(m.emFeridas) ? m.emFeridas : [];

    // "Sem uso típico em curativos" não conta como uso em feridas
    const hasDC = dcList.length > 0;
    const hasFW = fwList.some(x => {
      const t = String(x || "").toLowerCase();
      return !(t.includes("sem uso") || t.includes("não é típico") || t.includes("nao e tipico") || t.includes("mais hardware") || t.includes("hardware"));
    });
// Bolinha:
    // - Azul: só data center
    // - Laranja: só feridas
    // - Meio a meio: ambos
    // - Cinza: nenhum
    let dotBg = "rgba(11,18,32,0.35)";
    if (hasDC && hasFW) dotBg = `linear-gradient(90deg, ${PALETTE.blue} 50%, ${PALETTE.orange} 50%)`;
    else if (hasDC) dotBg = PALETTE.blue;
    else if (hasFW) dotBg = PALETTE.orange;

    // Tag pode vir como string OU como objeto {text, color}
    let tagText = "";
    let tagColor = "rgba(11,18,32,0.35)";
    if (typeof m.tag === "string") {
      tagText = m.tag;
    } else if (m.tag && typeof m.tag === "object") {
      tagText = m.tag.text || "";
      tagColor = (typeof m.tag.color === "string") ? m.tag.color : tagColor;
    }

    const dc = (m.emDataCenter || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");
    const fw = (m.emFeridas || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");

    const refs = (m.evidencia || []).map(e => {
      const href = e.href;
      const label = e.label || href;
      return `<li><a class="linkout" href="${escapeAttr(href)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a></li>`;
    }).join("");

    return `
      <div class="mcard">
        <div class="mhead">
          <div class="mname">${escapeHtml(m.mineral || "")}</div>
          ${
            tagText
              ? `<span class="tag"><span class="tag-dot" style="background:${dotBg}"></span>${escapeHtml(tagText)}</span>`
              : `<span class="tag"><span class="tag-dot" style="background:${dotBg}"></span>${hasDC && hasFW ? "DATA CENTER + FERIDAS" : (hasDC ? "DATA CENTER" : (hasFW ? "FERIDAS" : "—"))}</span>`
          }
        </div>

        <div class="cols">
          <div class="col">
            <div class="col-title">Por que é crítico (data center)</div>
            <ul>${dc}</ul>
          </div>
          <div class="col">
            <div class="col-title">Onde entra em feridas crônicas</div>
            <ul>${fw}</ul>
          </div>
        </div>

        ${
          refs
            ? `
            <div class="refs-quick">
              <div class="col-title">Referências rápidas</div>
              <ul>${refs}</ul>
            </div>
          `
            : ""
        }
      </div>
    `;
  }).join("");
}

// Helpers básicos para evitar quebrar HTML
function escapeHtml(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function escapeAttr(s) {
  return escapeHtml(s).replaceAll("`", "&#096;");
}

function boot() {
  // Links do topo
  setLink("lnk-usgs", SOURCES.usgsKeyMinerals, "Key minerals in data centers");
  setLink("lnk-vc", SOURCES.visualCapitalist, "The critical minerals powering the AI boom");
  setLink("lnk-vc2", SOURCES.visualCapitalist, "Visual Capitalist");
  setLink("lnk-usgs2", SOURCES.usgsKeyMinerals, "USGS");
  setLink("lnk-vc3", SOURCES.visualCapitalist, "Visual Capitalist");
  setLink("lnk-usgs3", SOURCES.usgsKeyMinerals, "USGS");

  // Referências
  setLink("ref-vc", SOURCES.visualCapitalist);
  setLink("ref-usgs", SOURCES.usgsKeyMinerals);
  setLink("ref-wi-silver", SOURCES.woundsInternationalSilverConsensus);
  setLink("ref-cochrane", SOURCES.cochraneSilverInfected);
  setLink("ref-silicone", SOURCES.softSiliconeMadeEasyPdf);
  setLink("ref-charcoal", SOURCES.charcoalSilverStudyPubMed);
  setLink("ref-copper", SOURCES.copperOxideDressingsPubMed);

  renderMiniTable();
  renderMinerals();
}

document.addEventListener("DOMContentLoaded", boot);
