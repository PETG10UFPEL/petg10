const PALETTE = {
  orange: "#602b23",
  blue: "#609CD2",
  navy: "#1E3658",
  ink: "#0B1220",
  bg: "#F6F8FB",
  card: "#FFFFFF",
  line: "rgba(11,18,32,0.10)",
};

const SOURCES = {
  visualCapitalist: {
    url: "https://www.visualcapitalist.com/the-critical-minerals-powering-the-ai-boom/?mc_cid=828e30ab98&mc_eid=d1f0a9913e",
    desc: "Infográfico detalhando os minerais essenciais para a infraestrutura de IA e hardware de data centers."
  },
  usgsKeyMinerals: {
    url: "https://www.usgs.gov/media/images/key-minerals-data-centers-infographic",
    desc: "Dados oficiais do Serviço Geológico dos EUA sobre minerais críticos em infraestruturas digitais."
  },
  cochraneSilverInfected: {
    url: "https://www.cochrane.org/evidence/CD005486_topical-silver-treating-infected-wounds",
    desc: "Revisão sistemática sobre a eficácia da prata tópica no tratamento de feridas infectadas."
  },
  woundsInternationalSilverConsensus: {
    url: "https://woundsinternational.com/consensus-documents/international-consensus-appropriate-use-silver-dressings-wounds-english-en/",
    desc: "Consenso internacional sobre as indicações clínicas e uso racional de curativos com prata."
  },
  softSiliconeMadeEasyPdf: {
    url: "https://woundsinternational.com/wp-content/uploads/2023/02/c6c17c8108884b42545f060eabc1d29f.pdf",
    desc: "Guia prático sobre o uso de silicone macio para proteção da pele e trocas atraumáticas."
  },
  charcoalSilverStudyPubMed: {
    url: "https://pubmed.ncbi.nlm.nih.gov/15575569/",
    desc: "Estudo sobre a combinação de carvão ativado e prata no controle de odor e carga bacteriana."
  },
  copperOxideDressingsPubMed: {
    url: "https://pubmed.ncbi.nlm.nih.gov/25901580/",
    desc: "Pesquisa sobre as propriedades antimicrobianas e regenerativas de curativos com óxido de cobre."
  }
};

const minerals = [
  {
    mineral: "Prata (Ag)",
    emDataCenter: ["Contatos elétricos e condutividade", "Conexões de alta performance."],
    emFeridas: ["Curativos impregnados (antimicrobiano)", "Controle de bioburden; uso racional."],
    evidencia: [
      { label: "Consenso (Wounds Int.)", href: SOURCES.woundsInternationalSilverConsensus },
      { label: "Cochrane", href: SOURCES.cochraneSilverInfected },
    ],
    tag: { text: "USO FORTE", color: PALETTE.orange },
  },
  {
    mineral: "Cobre (Cu)",
    emDataCenter: ["Cabos, barramentos e conectores", "Infraestrutura de refrigeração."],
    emFeridas: ["Curativos com óxido de cobre", "Suporte à angiogênese (em expansão)."],
    evidencia: [
      { label: "Estudo Cobre (PubMed)", href: SOURCES.copperOxideDressingsPubMed },
    ],
    tag: { text: "EM EXPANSÃO", color: PALETTE.orange },
  },
  {
    mineral: "Silício (Si) → Silicone",
    emDataCenter: ["Base de semicondutores (chips)", "Eletrônica de potência."],
    emFeridas: ["Adesivo de silicone (atraumático)", "Reduz dor e trauma na troca."],
    evidencia: [
      { label: "Guia Silicone (PDF)", href: SOURCES.softSiliconeMadeEasyPdf },
    ],
    tag: { text: "CONSOLIDADO", color: PALETTE.orange },
  },
  {
    mineral: "Carbono (C) / Carvão",
    emDataCenter: ["Baterias e gestão energética", "Materiais compósitos."],
    emFeridas: ["Curativos com carvão ativado", "Controle de odor e adsorção."],
    evidencia: [
      { label: "Carvão + Prata (PubMed)", href: SOURCES.charcoalSilverStudyPubMed },
    ],
    tag: { text: "PRAGMÁTICO (odor)", color: PALETTE.orange },
  },
  {
    mineral: "Níquel (Ni)",
    emDataCenter: ["Baterias e ligas de alta resistência", "Componentes estruturais."],
    emFeridas: ["Não utilizado como ativo", "Risco de alergia e irritação local."],
    evidencia: [],
    tag: { text: "SEM USO DIRETO", color: "rgba(11,18,32,0.45)" },
  },
  {
    mineral: "Cobalto (Co)",
    emDataCenter: ["Baterias (UPS) e cadeias de energia", "Materiais magnéticos."],
    emFeridas: ["Sem aplicação em curativos típicos", "Uso restrito a hardware."],
    evidencia: [],
    tag: { text: "SEM USO DIRETO", color: "rgba(11,18,32,0.45)" },
  },
  {
    mineral: "Terras raras (ex. Neodímio)",
    emDataCenter: ["Ímãs para motores e ventiladores", "Equipamentos de acionamento."],
    emFeridas: ["Sem aplicação típica em coberturas", "Uso em dispositivos médicos (hardware)."],
    evidencia: [],
    tag: { text: "INDIRETO (equip.)", color: "rgba(11,18,32,0.45)" },
  },
  {
    mineral: "Estanho / Tântalo (Sn/Ta/W)",
    emDataCenter: ["Soldas e capacitores eletrônicos", "Circuitos de alta confiabilidade."],
    emFeridas: ["Sem aplicação em curativos", "Essencial para a eletrônica do cuidado."],
    evidencia: [],
    tag: { text: "NÃO CURATIVO", color: "rgba(11,18,32,0.45)" },
  }
];

const MINI_ELEMS = [
  { s: "Ag", n: "Prata", c: PALETTE.orange, u: "antimicrobiano" },
  { s: "Cu", n: "Cobre", c: PALETTE.orange, u: "óxido de cobre" },
  { s: "Si", n: "Silício", c: PALETTE.navy, u: "silicone médico" },
  { s: "C", n: "Carbono", c: PALETTE.orange, u: "carvão ativado" },
  { s: "Ni", n: "Níquel", c: "rgba(11,18,32,0.45)", u: "sem uso ativo" },
  { s: "Co", n: "Cobalto", c: "rgba(11,18,32,0.45)", u: "sem uso ativo" },
  { s: "Sn", n: "Estanho", c: "rgba(11,18,32,0.45)", u: "soldas" },
  { s: "Ta", n: "Tântalo", c: "rgba(11,18,32,0.45)", u: "capacitores" }
];

function escapeHtml(s) {
  return String(s ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
function escapeAttr(s) { return escapeHtml(s).replaceAll("`", "&#096;"); }

function setLink(id, sourceObj, label) {
  const el = document.getElementById(id);
  if (!el || !sourceObj) return;
  el.href = sourceObj.url;
  el.textContent = label || sourceObj.url;
}

function renderMiniTable() {
  const root = document.getElementById("miniTable");
  if (!root) return;
  root.innerHTML = MINI_ELEMS.map(e => {
    const bg = `linear-gradient(135deg, ${e.c}22, transparent 55%)`;
    return `
      <div class="elem">
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
    const tagText = m.tag?.text || "";
    const dotBg = m.tag?.color || "rgba(11,18,32,0.35)";
    const dc = (m.emDataCenter || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");
    const fw = (m.emFeridas || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");
    const refs = (m.evidencia || []).map(e => {
      const url = e.href.url || e.href;
      return `<li><a class="linkout" href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(e.label)}</a></li>`;
    }).join("");

    return `
      <div class="mcard">
        <div class="mhead">
          <div class="mname">${escapeHtml(m.mineral)}</div>
          <span class="tag"><span class="tag-dot" style="background:${dotBg}"></span>${escapeHtml(tagText)}</span>
        </div>
        <div class="cols">
          <div class="col"><div class="col-title">Data Center</div><ul>${dc}</ul></div>
          <div class="col"><div class="col-title">Curativos</div><ul>${fw}</ul></div>
        </div>
        ${refs ? `<div class="refs-quick"><div class="col-title">Evidência</div><ul>${refs}</ul></div>` : ""}
      </div>
    `;
  }).join("");
}

function boot() {
  // Renderização visual primeiro
  renderMiniTable();
  renderMinerals();

  // Links do topo
  setLink("lnk-usgs", SOURCES.usgsKeyMinerals, "Key minerals in data centers");
  setLink("lnk-vc", SOURCES.visualCapitalist, "The critical minerals powering the AI boom");
  setLink("lnk-vc2", SOURCES.visualCapitalist, "Visual Capitalist");
  setLink("lnk-usgs2", SOURCES.usgsKeyMinerals, "USGS");
  setLink("lnk-vc3", SOURCES.visualCapitalist, "Visual Capitalist");
  setLink("lnk-usgs3", SOURCES.usgsKeyMinerals, "USGS");

  // Lista de Referências Final com descrições
  const refList = document.querySelector('.refs');
  if (refList) {
    const refData = [
      { obj: SOURCES.visualCapitalist, title: "Visual Capitalist — The critical minerals powering the AI boom" },
      { obj: SOURCES.usgsKeyMinerals, title: "USGS — Key minerals in data centers" },
      { obj: SOURCES.woundsInternationalSilverConsensus, title: "Wounds International — Appropriate use of silver dressings" },
      { obj: SOURCES.cochraneSilverInfected, title: "Cochrane — Topical silver for infected wounds" },
      { obj: SOURCES.softSiliconeMadeEasyPdf, title: "Wounds International — Soft silicone dressings (PDF)" },
      { obj: SOURCES.charcoalSilverStudyPubMed, title: "PubMed — Activated charcoal + silver dressing" },
      { obj: SOURCES.copperOxideDressingsPubMed, title: "PubMed — Copper oxide wound dressings" }
    ];

    refList.innerHTML = refData.map(item => `
      <li style="margin-bottom: 12px;">
        <a class="linkout" href="${item.obj.url}" target="_blank" rel="noopener noreferrer" style="font-weight:600;">${item.title}</a>
        <div style="font-size: 13px; color: #555; margin-top: 4px; line-height: 1.4;">${item.obj.desc}</div>
      </li>
    `).join("");
  }
}

document.addEventListener("DOMContentLoaded", boot);