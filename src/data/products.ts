export interface OilProduct {
  id: number;
  name: string;
  brand: string;
  category: string;
  viscosity: string;
  volume: string;
  price: number;
  stock: string;
  image: string;
  description: string;
  specifications: {
    api: string;
    acea: string;
    temperature: string;
  };
}

export interface TireProduct {
  id: number;
  name: string;
  brand: string;
  size: string;
  season: "Летние" | "Зимние" | "Всесезонные";
  price: number;
  stock: string;
  image: string;
  description: string;
  specifications: {
    width: string;
    loadIndex: string;
    fuelEfficiency?: string;
  };
}

export interface ChemicalProduct {
  id: number;
  name: string;
  brand: string;
  category: string;
  volume: string;
  price: number;
  stock: string;
  image: string;
  description: string;
  type?: string;
  specifications: {
    standard?: string;
    freezingPoint?: string;
    boilingPoint?: string;
    application?: string;
  };
}

export const oilProducts: OilProduct[] = [
  {
    id: 3709,
    name: "3709 Liqui Moly Top Tec 4200 New Generation",
    brand: "Liqui Moly",
    category: "Синтетическое",
    viscosity: "5W-30",
    volume: "60 л",
    price: 86900,
    stock: "В наличии",
    image:
      "https://new.alleya-group.ru/upload/iblock/c8c/40yozcg0ewa73c6mo6z3rcxmb5lw0rzw/63724c9c-58f5-11e3-801b-0015175582ed.jpg",
    description:
      "Синтетическое малозольное (Mid SAPS) моторное масло для двигателей легковых автомобилей, оснащенных двойной системой нейтрализации отработавших газов (в том числе DPF). Cоответствует экологическим нормам EURO 4 и выше.",
    specifications: {
      api: "SP",
      acea: "C3",
      temperature: "-35°C/+40°C",
    },
  },
  {
    id: 3758,
    name: "3758 Liqui Moly Top Tec 4600",
    brand: "Liqui Moly",
    category: "Синтетическое",
    viscosity: "5W-30",
    volume: "60л",
    price: 77800,
    stock: "В наличии",
    image:
      "https://new.alleya-group.ru/upload/iblock/c8c/40yozcg0ewa73c6mo6z3rcxmb5lw0rzw/63724c9c-58f5-11e3-801b-0015175582ed.jpg",
    description:
      "Синтетическое малозольное (Mid SAPS) моторное масло для круглогодичного использования в бензиновых и дизельных двигателях легковых автомобилей. Рекомендуется для современных дизельных двигателей с многоступенчатым катализатором и сажевым фильтром (DPF).",
    specifications: {
      api: "SP",
      acea: "C3",
      temperature: "-35°C/+40°C",
    },
  },
  {
    id: 3715,
    name: "3715 Liqui Moly Top Tec 4200 New Generation",
    brand: "Liqui Moly",
    category: "Cинтетическое",
    viscosity: "5W-30",
    volume: "4л",
    price: 6250,
    stock: "В наличии",
    image:
      "https://new.alleya-group.ru/upload/iblock/358/kvb7qjqp17e9sw8krndpsnmskvou6rq7/ffdf024b-f87a-11e4-b814-0015175582ed.jpeg",
    description:
      "Синтетическое малозольное (Mid SAPS) моторное масло для двигателей легковых автомобилей, оснащенных двойной системой нейтрализации отработавших газов (в том числе DPF). Cоответствует экологическим нормам EURO 4 и выше.",
    specifications: {
      api: "SP",
      acea: "C3",
      temperature: "-25°C/+40°C",
    },
  },
  {
    id: 9056,
    name: "9056 Liqui Moly Molygen New Generation 5W-40",
    brand: "Liqui Moly",
    category: "Cинтетическое",
    viscosity: "5W-40",
    volume: "60л",
    price: 74000,
    stock: "В наличии",
    image:
      "https://new.alleya-group.ru/upload/iblock/c8c/40yozcg0ewa73c6mo6z3rcxmb5lw0rzw/63724c9c-58f5-11e3-801b-0015175582ed.jpg",
    description:
      "Моторное масло на синтетической базе с фирменным антифрикционным пакетом присадок Molygen, созданным на основе новейшей технологии Molecular Friction Control. Оптимально для автомобилей европейского и российского рынка. Экономит до 3,5% топлива и существенно продлевает ресурс двигателя. Моторное масло удовлетворяет современным спецификациям API/ACEA",
    specifications: {
      api: "SN",
      acea: "A3/B4",
      temperature: "-25°C/+40°C",
    },
  },
  {
    id: 1002,
    name: "Shell Helix Ultra",
    brand: "Shell",
    category: "Синтетическое",
    viscosity: "5W-40",
    volume: "4л",
    price: 3200,
    stock: "В наличии",
    image: "/img/oil-4.jpg",
    description:
      "Полностью синтетическое моторное масло с технологией PurePlus для максимальной защиты двигателя.",
    specifications: {
      api: "SP",
      acea: "A3/B3, A3/B4",
      temperature: "-35°C/+40°C",
    },
  },
];

export const tireProducts: TireProduct[] = [
  {
    id: 2732068526,
    name: " CORDIANT 265/60R18 114H COMFORT 2 SUV",
    brand: "CORDIANT",
    size: "265/60 R18",
    season: "Летние",
    price: 12320,
    stock: "В наличии",
    image: "https://vershinatyres.ru/storage/155764/Comfort2.jpg",
    description: "Летние шины",
    specifications: {
      width: "265мм",
      loadIndex: "114H",
      fuelEfficiency: "",
    },
  },
  {
    id: 2002,
    name: "Continental WinterContact",
    brand: "Continental",
    size: "195/65 R15",
    season: "Зимние",
    price: 7200,
    stock: "В наличии",
    image: "/img/tire-2.jpg",
    description:
      "Зимние фрикционные шины с превосходным сцеплением на снегу и льду.",
    specifications: {
      width: "195мм",
      loadIndex: "91T",
    },
  },
  {
    id: 2003,
    name: "Bridgestone Turanza",
    brand: "Bridgestone",
    size: "225/50 R17",
    season: "Летние",
    price: 12500,
    stock: "Мало",
    image: "/img/tire-3.jpg",
    description: "Премиальные летние шины для комфортной и безопасной езды.",
    specifications: {
      width: "225мм",
      loadIndex: "94W",
      fuelEfficiency: "B",
    },
  },
  {
    id: 2004,
    name: "Nokian Hakkapeliitta",
    brand: "Nokian",
    size: "215/60 R16",
    season: "Зимние",
    price: 9800,
    stock: "В наличии",
    image: "/img/tire-4.jpg",
    description:
      "Шипованные зимние шины для экстремальных условий эксплуатации.",
    specifications: {
      width: "215мм",
      loadIndex: "95T",
    },
  },
];

export const chemicalProducts: ChemicalProduct[] = [
  {
    id: 3001,
    name: "Felix Antifreeze",
    brand: "Felix",
    category: "Антифриз",
    volume: "5л",
    price: 690,
    stock: "В наличии",
    image: "/img/chemical-1.jpg",
    description:
      "Готовый к применению антифриз G11 для системы охлаждения двигателя.",
    type: "G11",
    specifications: {
      standard: "ГОСТ 28084-89",
      freezingPoint: "-40°C",
      boilingPoint: "+108°C",
      application: "Легковые авто",
    },
  },
  {
    id: 3002,
    name: "ATE DOT 4",
    brand: "ATE",
    category: "Тормозная жидкость",
    volume: "1л",
    price: 850,
    stock: "В наличии",
    image: "/img/chemical-2.jpg",
    description:
      "Высококачественная тормозная жидкость DOT 4 для гидравлических тормозных систем.",
    type: "DOT 4",
    specifications: {
      standard: "SAE J1703",
      boilingPoint: "+230°C",
      application: "Тормозные системы",
    },
  },
  {
    id: 3003,
    name: "Hi-Gear Engine Flush",
    brand: "Hi-Gear",
    category: "Промывка двигателя",
    volume: "444мл",
    price: 420,
    stock: "В наличии",
    image: "/img/chemical-3.jpg",
    description: "Быстрая промывка двигателя для удаления отложений и шлама.",
    specifications: {
      application: "Бензин/дизель",
    },
  },
  {
    id: 3004,
    name: "Sonax Glass Cleaner",
    brand: "Sonax",
    category: "Очиститель стекол",
    volume: "500мл",
    price: 320,
    stock: "В наличии",
    image: "/img/chemical-4.jpg",
    description:
      "Профессиональный очиститель для автомобильных стекол без разводов.",
    specifications: {
      application: "Стекла автомобиля",
    },
  },
];
