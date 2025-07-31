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
    name: "Top Tec 4200 New Generation",
    brand: "Liqui Moly",
    category: "Синтетическое",
    viscosity: "5W-30",
    volume: "60 л",
    price: 86900,
    stock: "В наличии",
    image: "/img/oil-1.jpg",
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
    name: "Top Tec 4600",
    brand: "Liqui Moly",
    category: "Синтетическое",
    viscosity: "5W-30",
    volume: "60л",
    price: 77800,
    stock: "В наличии",
    image: "/img/oil-2.jpg",
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
    name: "Top Tec 4200 New Generation",
    brand: "Liqui Moly",
    category: "Cинтетическое",
    viscosity: "5W-30",
    volume: "4л",
    price: 6250,
    stock: "В наличии",
    image:
      "/img/C:\Users\corsi\OneDrive\Рабочий стол\Леша\Фото Ассортимента\LM",
    description:
      "Синтетическое малозольное (Mid SAPS) моторное масло для двигателей легковых автомобилей, оснащенных двойной системой нейтрализации отработавших газов (в том числе DPF). Cоответствует экологическим нормам EURO 4 и выше.",
    specifications: {
      api: "SP",
      acea: "C3",
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
    id: 2001,
    name: "Michelin Primacy 4",
    brand: "Michelin",
    size: "205/55 R16",
    season: "Летние",
    price: 8900,
    stock: "В наличии",
    image: "/img/tire-1.jpg",
    description:
      "Летние шины с отличными характеристиками торможения на мокрой дороге и длительным сроком службы.",
    specifications: {
      width: "205мм",
      loadIndex: "91H",
      fuelEfficiency: "A",
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
