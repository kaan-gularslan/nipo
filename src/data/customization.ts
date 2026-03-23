// Customization tree structure — each node has options that branch into children

export interface CustomizationOption {
  id: string;
  label: string;
  icon?: string;
  priceModifier?: number; // price multiplier (e.g., 1.2 = +20%)
  description?: string;
}

export interface CustomizationNode {
  id: string;
  label: string;
  description?: string;
  options: CustomizationOption[];
  /** Maps option ID → next child node */
  children?: Record<string, CustomizationNode>;
}

export interface CustomizationTree {
  categoryId: string;
  root: CustomizationNode;
}

// ─── Customization trees per product category ───

const kutuTree: CustomizationNode = {
  id: "malzeme",
  label: "Malzeme Seçimi",
  description: "Kutunuzun malzemesini belirleyin",
  options: [
    { id: "kraft", label: "Kraft Karton", icon: "🟤", description: "Doğal kraft görünüm, ekonomik", priceModifier: 1 },
    { id: "beyaz", label: "Beyaz Karton", icon: "⬜", description: "Parlak beyaz yüzey, şık görünüm", priceModifier: 1.1 },
    { id: "oluklu", label: "Oluklu Mukavva", icon: "📦", description: "Dayanıklı, ağır ürünler için ideal", priceModifier: 1.15 },
  ],
  children: {
    kraft: {
      id: "boyut",
      label: "Boyut",
      description: "Kutunuzun boyutunu seçin",
      options: [
        { id: "kucuk", label: "Küçük (20x15x10)", icon: "📏", priceModifier: 1 },
        { id: "orta", label: "Orta (30x20x15)", icon: "📐", priceModifier: 1.3 },
        { id: "buyuk", label: "Büyük (40x30x20)", icon: "📐", priceModifier: 1.6 },
      ],
      children: {
        kucuk: buildPrintNode(),
        orta: buildPrintNode(),
        buyuk: buildPrintNode(),
      },
    },
    beyaz: {
      id: "boyut",
      label: "Boyut",
      description: "Kutunuzun boyutunu seçin",
      options: [
        { id: "kucuk", label: "Küçük (20x15x10)", icon: "📏", priceModifier: 1 },
        { id: "orta", label: "Orta (30x20x15)", icon: "📐", priceModifier: 1.3 },
        { id: "buyuk", label: "Büyük (40x30x20)", icon: "📐", priceModifier: 1.6 },
      ],
      children: {
        kucuk: buildPrintNodeWithLamination(),
        orta: buildPrintNodeWithLamination(),
        buyuk: buildPrintNodeWithLamination(),
      },
    },
    oluklu: {
      id: "dalga",
      label: "Oluklu Dalga Tipi",
      description: "Mukavva dalga yapısını seçin",
      options: [
        { id: "e-dalga", label: "E Dalga (ince)", icon: "〰️", description: "1.5mm, hafif ürünler", priceModifier: 1 },
        { id: "b-dalga", label: "B Dalga (orta)", icon: "🌊", description: "3mm, genel amaçlı", priceModifier: 1.1 },
        { id: "bc-dalga", label: "BC Çift Dalga", icon: "🔵", description: "7mm, ağır yükler", priceModifier: 1.35 },
      ],
      children: {
        "e-dalga": buildSizeAndPrint(),
        "b-dalga": buildSizeAndPrint(),
        "bc-dalga": buildSizeAndPrint(),
      },
    },
  },
};

function buildPrintNode(): CustomizationNode {
  return {
    id: "baski",
    label: "Baskı Seçeneği",
    description: "Baskı tekniğini belirleyin",
    options: [
      { id: "baskisiz", label: "Baskısız", icon: "⚪", description: "Düz, baskısız kutu", priceModifier: 1 },
      { id: "1renk", label: "1 Renk Baskı", icon: "🔵", description: "Tek renk logo baskısı", priceModifier: 1.2 },
      { id: "4renk", label: "4 Renk Baskı", icon: "🎨", description: "Tam renkli baskı", priceModifier: 1.5 },
    ],
    children: {
      baskisiz: buildQuantityNode(),
      "1renk": buildQuantityNode(),
      "4renk": buildQuantityNode(),
    },
  };
}

function buildPrintNodeWithLamination(): CustomizationNode {
  return {
    id: "baski",
    label: "Baskı & Kaplama",
    description: "Baskı ve yüzey işlemi seçin",
    options: [
      { id: "baskisiz", label: "Baskısız", icon: "⚪", priceModifier: 1 },
      { id: "1renk", label: "1 Renk Baskı", icon: "🔵", priceModifier: 1.2 },
      { id: "4renk", label: "4 Renk Baskı", icon: "🎨", priceModifier: 1.5 },
    ],
    children: {
      baskisiz: buildLaminationNode(),
      "1renk": buildLaminationNode(),
      "4renk": buildLaminationNode(),
    },
  };
}

function buildLaminationNode(): CustomizationNode {
  return {
    id: "laminasyon",
    label: "Laminasyon",
    description: "Yüzey kaplama seçin",
    options: [
      { id: "yok", label: "Laminasyonsuz", icon: "—", priceModifier: 1 },
      { id: "mat", label: "Mat Selefon", icon: "🌑", description: "Şık mat görünüm", priceModifier: 1.15 },
      { id: "parlak", label: "Parlak Selefon", icon: "✨", description: "Canlı parlak yüzey", priceModifier: 1.15 },
      { id: "soft-touch", label: "Soft Touch", icon: "🤲", description: "Kadifemsi premium dokunuş", priceModifier: 1.3 },
    ],
    children: {
      yok: buildQuantityNode(),
      mat: buildQuantityNode(),
      parlak: buildQuantityNode(),
      "soft-touch": buildQuantityNode(),
    },
  };
}

function buildSizeAndPrint(): CustomizationNode {
  return {
    id: "boyut",
    label: "Boyut",
    options: [
      { id: "kucuk", label: "Küçük (25x20x15)", icon: "📏", priceModifier: 1 },
      { id: "orta", label: "Orta (35x25x20)", icon: "📐", priceModifier: 1.3 },
      { id: "buyuk", label: "Büyük (50x35x25)", icon: "📐", priceModifier: 1.6 },
      { id: "ozel", label: "Özel Boyut", icon: "✂️", description: "İstediğiniz ölçüde", priceModifier: 1.4 },
    ],
    children: {
      kucuk: buildPrintNode(),
      orta: buildPrintNode(),
      buyuk: buildPrintNode(),
      ozel: buildPrintNode(),
    },
  };
}

function buildQuantityNode(): CustomizationNode {
  return {
    id: "adet",
    label: "Sipariş Adedi",
    description: "Miktar arttıkça birim fiyat düşer",
    options: [
      { id: "500", label: "500 Adet", icon: "📦", priceModifier: 1 },
      { id: "1000", label: "1.000 Adet", icon: "📦📦", description: "%5 indirim", priceModifier: 0.95 },
      { id: "5000", label: "5.000 Adet", icon: "🏭", description: "%15 indirim", priceModifier: 0.85 },
      { id: "10000", label: "10.000+ Adet", icon: "🏭🏭", description: "%25 indirim", priceModifier: 0.75 },
    ],
  };
}

// ─── Çanta ağacı ───

const cantaTree: CustomizationNode = {
  id: "tip",
  label: "Çanta Tipi",
  description: "Çanta tipini seçin",
  options: [
    { id: "kraft", label: "Kraft Çanta", icon: "🟤", description: "Bükümlü sap", priceModifier: 1 },
    { id: "karton", label: "Karton Çanta", icon: "🛍️", description: "Lüks, ip saplı", priceModifier: 1.5 },
    { id: "bez", label: "Bez Çanta", icon: "👜", description: "Çevreci, yıkanabilir", priceModifier: 2 },
  ],
  children: {
    kraft: {
      id: "boyut",
      label: "Boyut",
      options: [
        { id: "kucuk", label: "Küçük (18x24)", icon: "📏", priceModifier: 1 },
        { id: "orta", label: "Orta (26x32)", icon: "📐", priceModifier: 1.2 },
        { id: "buyuk", label: "Büyük (32x40)", icon: "📐", priceModifier: 1.5 },
      ],
      children: {
        kucuk: buildPrintNode(),
        orta: buildPrintNode(),
        buyuk: buildPrintNode(),
      },
    },
    karton: {
      id: "boyut",
      label: "Boyut",
      options: [
        { id: "kucuk", label: "Küçük (20x25)", icon: "📏", priceModifier: 1 },
        { id: "orta", label: "Orta (26x32)", icon: "📐", priceModifier: 1.2 },
        { id: "buyuk", label: "Büyük (35x45)", icon: "📐", priceModifier: 1.5 },
      ],
      children: {
        kucuk: buildPrintNodeWithLamination(),
        orta: buildPrintNodeWithLamination(),
        buyuk: buildPrintNodeWithLamination(),
      },
    },
    bez: {
      id: "boyut",
      label: "Boyut",
      options: [
        { id: "standart", label: "Standart (35x40)", icon: "📐", priceModifier: 1 },
        { id: "buyuk", label: "Büyük (40x45)", icon: "📐", priceModifier: 1.2 },
      ],
      children: {
        standart: buildPrintNode(),
        buyuk: buildPrintNode(),
      },
    },
  },
};

// ─── Bardak ağacı ───

const bardakTree: CustomizationNode = {
  id: "hacim",
  label: "Bardak Hacmi",
  description: "Bardak boyutunu seçin",
  options: [
    { id: "4oz", label: "4oz (120ml)", icon: "☕", description: "Espresso", priceModifier: 0.8 },
    { id: "8oz", label: "8oz (240ml)", icon: "☕", description: "Standart kahve", priceModifier: 1 },
    { id: "12oz", label: "12oz (360ml)", icon: "🥤", description: "Büyük boy", priceModifier: 1.2 },
    { id: "16oz", label: "16oz (480ml)", icon: "🥤", description: "Extra büyük", priceModifier: 1.4 },
  ],
  children: {
    "4oz": buildBardakType(),
    "8oz": buildBardakType(),
    "12oz": buildBardakType(),
    "16oz": buildBardakType(),
  },
};

function buildBardakType(): CustomizationNode {
  return {
    id: "tip",
    label: "Bardak Tipi",
    options: [
      { id: "sicak", label: "Sıcak İçecek", icon: "🔥", description: "Tek cidar, PE kaplı", priceModifier: 1 },
      { id: "soguk", label: "Soğuk İçecek", icon: "❄️", description: "Şeffaf kapaklı", priceModifier: 1.1 },
      { id: "cift-cidar", label: "Çift Cidar", icon: "🛡️", description: "Isı yalıtımlı, premium", priceModifier: 1.6 },
    ],
    children: {
      sicak: buildPrintNode(),
      soguk: buildPrintNode(),
      "cift-cidar": buildPrintNode(),
    },
  };
}

// ─── Etiket ağacı ───

const etiketTree: CustomizationNode = {
  id: "malzeme",
  label: "Etiket Malzemesi",
  options: [
    { id: "kuse", label: "Kuşe Kağıt", icon: "📄", description: "Standart etiket", priceModifier: 1 },
    { id: "kraft", label: "Kraft Kağıt", icon: "🟤", description: "Doğal görünüm", priceModifier: 1.1 },
    { id: "seffaf", label: "Şeffaf (PP)", icon: "💎", description: "Cam/plastik yüzeyler", priceModifier: 1.5 },
    { id: "metalik", label: "Metalik Folyo", icon: "✨", description: "Premium parlak", priceModifier: 2 },
  ],
  children: {
    kuse: buildEtiketBoyut(),
    kraft: buildEtiketBoyut(),
    seffaf: buildEtiketBoyut(),
    metalik: buildEtiketBoyut(),
  },
};

function buildEtiketBoyut(): CustomizationNode {
  return {
    id: "boyut",
    label: "Etiket Boyutu",
    options: [
      { id: "kucuk", label: "30x20mm", icon: "📏", priceModifier: 1 },
      { id: "orta", label: "50x30mm", icon: "📐", priceModifier: 1.3 },
      { id: "buyuk", label: "80x50mm", icon: "📐", priceModifier: 1.6 },
      { id: "ozel", label: "Özel Boyut", icon: "✂️", priceModifier: 1.4 },
    ],
    children: {
      kucuk: buildEtiketSekil(),
      orta: buildEtiketSekil(),
      buyuk: buildEtiketSekil(),
      ozel: buildEtiketSekil(),
    },
  };
}

function buildEtiketSekil(): CustomizationNode {
  return {
    id: "sekil",
    label: "Etiket Şekli",
    options: [
      { id: "dikdortgen", label: "Dikdörtgen", icon: "▬", priceModifier: 1 },
      { id: "yuvarlak", label: "Yuvarlak", icon: "●", priceModifier: 1.1 },
      { id: "ozel-kesim", label: "Özel Kesim", icon: "✂️", description: "İstediğiniz şekil", priceModifier: 1.3 },
    ],
    children: {
      dikdortgen: buildQuantityNode(),
      yuvarlak: buildQuantityNode(),
      "ozel-kesim": buildQuantityNode(),
    },
  };
}

// ─── Generic tree (for categories without specific tree) ───

const genericTree: CustomizationNode = {
  id: "baski",
  label: "Baskı Seçeneği",
  description: "Ürününüze baskı isterseniz seçin",
  options: [
    { id: "baskisiz", label: "Baskısız (Standart)", icon: "⚪", priceModifier: 1 },
    { id: "1renk", label: "1 Renk Logo Baskı", icon: "🔵", priceModifier: 1.2 },
    { id: "4renk", label: "4 Renk Tam Baskı", icon: "🎨", priceModifier: 1.5 },
  ],
  children: {
    baskisiz: buildQuantityNode(),
    "1renk": buildQuantityNode(),
    "4renk": buildQuantityNode(),
  },
};

// ─── Category → Tree mapping ───

export const customizationTrees: Record<string, CustomizationNode> = {
  "oluklu-kutu": kutuTree,
  "karton-kutu": kutuTree,
  "baski-canta": cantaTree,
  "bardak": bardakTree,
  "etiket": etiketTree,
  "pecete": genericTree,
  "gida-kabi": genericTree,
  "baski-kagit": genericTree,
  "amerikan-servis": genericTree,
  "kasap-kagit": genericTree,
  "islak-mendil": genericTree,
  "poset": genericTree,
  "toz-dolum": genericTree,
  "strec-bant": genericTree,
};

export const getCustomizationTree = (categoryId: string): CustomizationNode | null =>
  customizationTrees[categoryId] || null;
