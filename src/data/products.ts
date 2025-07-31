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
  size: string;
  season: string;
  brand: string;
  price: number;
  stock: string;
  image: string;
  description: string;
  specifications: {
    width: string;
    profile: string;
    diameter: string;
    loadIndex: string;
    fuelEfficiency?: string;
    snowflakeSymbol?: string;
  };
}

export interface ChemicalProduct {
  id: number;
  name: string;
  brand: string;
  category: string;
  type: string;
  volume: string;
  price: number;
  stock: string;
  image: string;
  description: string;
  specifications: {
    standard?: string;
    freezingPoint?: string;
    boilingPoint?: string;
    color?: string;
    application?: string;
  };
}

export const oilProducts: OilProduct[] = [
  {
    id: 1,
    name: 'Castrol GTX 5W-30',
    brand: 'Castrol',
    category: 'Синтетическое',
    viscosity: '5W-30',
    volume: '4л',
    price: 2450,
    stock: 'В наличии',
    image: '/img/3dd3c2ba-ec79-4043-839f-45722f4c03e4.jpg',
    description: 'Высококачественное синтетическое моторное масло для бензиновых двигателей',
    specifications: {
      api: 'SN/CF',
      acea: 'A3/B4',
      temperature: 'от -35°C до +40°C'
    }
  },
  {
    id: 2,
    name: 'Mobil 1 ESP 5W-30',
    brand: 'Mobil',
    category: 'Синтетическое',
    viscosity: '5W-30',
    volume: '4л',
    price: 3200,
    stock: 'В наличии',
    image: '/img/3dd3c2ba-ec79-4043-839f-45722f4c03e4.jpg',
    description: 'Премиальное синтетическое масло с технологией защиты двигателя',
    specifications: {
      api: 'SN',
      acea: 'C3',
      temperature: 'от -40°C до +45°C'
    }
  },
  {
    id: 3,
    name: 'Shell Helix Ultra 5W-40',
    brand: 'Shell',
    category: 'Синтетическое',
    viscosity: '5W-40',
    volume: '4л',
    price: 2890,
    stock: 'В наличии',
    image: '/img/3dd3c2ba-ec79-4043-839f-45722f4c03e4.jpg',
    description: 'Полностью синтетическое масло с технологией PurePlus',
    specifications: {
      api: 'SN/CF',
      acea: 'A3/B4',
      temperature: 'от -35°C до +40°C'
    }
  },
  {
    id: 4,
    name: 'Lukoil Genesis 10W-40',
    brand: 'Lukoil',
    category: 'Полусинтетическое',
    viscosity: '10W-40',
    volume: '4л',
    price: 1850,
    stock: 'В наличии',
    image: '/img/3dd3c2ba-ec79-4043-839f-45722f4c03e4.jpg',
    description: 'Полусинтетическое масло для бензиновых и дизельных двигателей',
    specifications: {
      api: 'SL/CF',
      acea: 'A3/B4',
      temperature: 'от -25°C до +40°C'
    }
  },
  {
    id: 5,
    name: 'Total Quartz 7000 10W-40',
    brand: 'Total',
    category: 'Полусинтетическое',
    viscosity: '10W-40',
    volume: '5л',
    price: 2100,
    stock: 'Мало',
    image: '/img/3dd3c2ba-ec79-4043-839f-45722f4c03e4.jpg',
    description: 'Полусинтетическое масло с улучшенными защитными свойствами',
    specifications: {
      api: 'SL/CF',
      acea: 'A3/B4',
      temperature: 'от -25°C до +40°C'
    }
  },
  {
    id: 6,
    name: 'Rosneft Maximum 15W-40',
    brand: 'Rosneft',
    category: 'Минеральное',
    viscosity: '15W-40',
    volume: '5л',
    price: 1200,
    stock: 'В наличии',
    image: '/img/3dd3c2ba-ec79-4043-839f-45722f4c03e4.jpg',
    description: 'Минеральное масло для коммерческого транспорта',
    specifications: {
      api: 'SG/CD',
      acea: 'A2/B2',
      temperature: 'от -20°C до +40°C'
    }
  }
];

export const tireProducts: TireProduct[] = [
  {
    id: 1,
    name: 'Michelin Primacy 4',
    size: '205/55 R16',
    season: 'Летние',
    brand: 'Michelin',
    price: 8500,
    stock: 'В наличии',
    image: '/img/8ab4bac8-79ad-4019-8b7d-d31868e0de4f.jpg',
    description: 'Премиальные летние шины с улучшенным сцеплением на мокрой дороге',
    specifications: {
      width: '205 мм',
      profile: '55%',
      diameter: 'R16',
      loadIndex: '91H',
      fuelEfficiency: 'B'
    }
  },
  {
    id: 2,
    name: 'Continental WinterContact TS 860',
    size: '195/65 R15',
    season: 'Зимние',
    brand: 'Continental',
    price: 7200,
    stock: 'В наличии',
    image: '/img/8ab4bac8-79ad-4019-8b7d-d31868e0de4f.jpg',
    description: 'Зимние шины с превосходным сцеплением на снегу и льду',
    specifications: {
      width: '195 мм',
      profile: '65%',
      diameter: 'R15',
      loadIndex: '91T',
      snowflakeSymbol: 'Да'
    }
  },
  {
    id: 3,
    name: 'Bridgestone Turanza T005',
    size: '225/60 R17',
    season: 'Летние',
    brand: 'Bridgestone',
    price: 9800,
    stock: 'Под заказ',
    image: '/img/8ab4bac8-79ad-4019-8b7d-d31868e0de4f.jpg',
    description: 'Летние шины премиум-класса для комфортной езды',
    specifications: {
      width: '225 мм',
      profile: '60%',
      diameter: 'R17',
      loadIndex: '99V',
      fuelEfficiency: 'A'
    }
  },
  {
    id: 4,
    name: 'Nokian Hakkapeliitta R3',
    size: '225/45 R17',
    season: 'Зимние',
    brand: 'Nokian',
    price: 12500,
    stock: 'В наличии',
    image: '/img/8ab4bac8-79ad-4019-8b7d-d31868e0de4f.jpg',
    description: 'Фрикционные зимние шины без шипов для суровых условий',
    specifications: {
      width: '225 мм',
      profile: '45%',
      diameter: 'R17',
      loadIndex: '94R',
      snowflakeSymbol: 'Да'
    }
  },
  {
    id: 5,
    name: 'Pirelli Cinturato P7',
    size: '215/60 R16',
    season: 'Летние',
    brand: 'Pirelli',
    price: 8900,
    stock: 'В наличии',
    image: '/img/8ab4bac8-79ad-4019-8b7d-d31868e0de4f.jpg',
    description: 'Экологичные летние шины с низким сопротивлением качению',
    specifications: {
      width: '215 мм',
      profile: '60%',
      diameter: 'R16',
      loadIndex: '95V',
      fuelEfficiency: 'B'
    }
  },
  {
    id: 6,
    name: 'Yokohama BluEarth-A AE-50',
    size: '185/60 R15',
    season: 'Летние',
    brand: 'Yokohama',
    price: 5800,
    stock: 'В наличии',
    image: '/img/8ab4bac8-79ad-4019-8b7d-d31868e0de4f.jpg',
    description: 'Экономичные летние шины с хорошими характеристиками',
    specifications: {
      width: '185 мм',
      profile: '60%',
      diameter: 'R15',
      loadIndex: '84H',
      fuelEfficiency: 'C'
    }
  }
];

export const chemicalProducts: ChemicalProduct[] = [
  {
    id: 1,
    name: 'Felix Carbox G12+ Красный',
    brand: 'Felix',
    category: 'Антифриз',
    type: 'G12+',
    volume: '5л',
    price: 850,
    stock: 'В наличии',
    image: '/img/1cd49f26-a4e6-4b94-8ed4-950853efccbc.jpg',
    description: 'Готовый к применению антифриз на основе этиленгликоля с карбоксилатными присадками',
    specifications: {
      standard: 'G12+',
      freezingPoint: 'до -40°C',
      boilingPoint: '+108°C',
      color: 'Красный'
    }
  },
  {
    id: 2,
    name: 'Sintec Antifreeze Lux G12',
    brand: 'Sintec',
    category: 'Антифриз',
    type: 'G12',
    volume: '10л',
    price: 1200,
    stock: 'В наличии',
    image: '/img/1cd49f26-a4e6-4b94-8ed4-950853efccbc.jpg',
    description: 'Карбоксилатный антифриз повышенного качества для современных двигателей',
    specifications: {
      standard: 'G12',
      freezingPoint: 'до -42°C',
      boilingPoint: '+109°C',
      color: 'Красный'
    }
  },
  {
    id: 3,
    name: 'Lukoil Antifreeze G11 Синий',
    brand: 'Lukoil',
    category: 'Антифриз',
    type: 'G11',
    volume: '5л',
    price: 720,
    stock: 'В наличии',
    image: '/img/1cd49f26-a4e6-4b94-8ed4-950853efccbc.jpg',
    description: 'Силикатный антифриз для универсального применения',
    specifications: {
      standard: 'G11',
      freezingPoint: 'до -40°C',
      boilingPoint: '+105°C',
      color: 'Синий'
    }
  },
  {
    id: 4,
    name: 'ATE DOT 4 TYP 200',
    brand: 'ATE',
    category: 'Тормозная жидкость',
    type: 'DOT 4',
    volume: '1л',
    price: 450,
    stock: 'В наличии',
    image: '/img/09f9e4dc-f203-472f-bd71-2db5ad250b68.jpg',
    description: 'Высококачественная тормозная жидкость для дисковых и барабанных тормозов',
    specifications: {
      standard: 'DOT 4',
      boilingPoint: '+230°C',
      application: 'Тормозные системы'
    }
  },
  {
    id: 5,
    name: 'Castrol React Performance DOT 4',
    brand: 'Castrol',
    category: 'Тормозная жидкость',
    type: 'DOT 4',
    volume: '1л',
    price: 520,
    stock: 'В наличии',
    image: '/img/09f9e4dc-f203-472f-bd71-2db5ad250b68.jpg',
    description: 'Премиальная тормозная жидкость для высоконагруженных тормозных систем',
    specifications: {
      standard: 'DOT 4',
      boilingPoint: '+265°C',
      application: 'Спортивные автомобили'
    }
  },
  {
    id: 6,
    name: 'Brembo DOT 3',
    brand: 'Brembo',
    category: 'Тормозная жидкость',
    type: 'DOT 3',
    volume: '0.5л',
    price: 380,
    stock: 'Мало',
    image: '/img/09f9e4dc-f203-472f-bd71-2db5ad250b68.jpg',
    description: 'Стандартная тормозная жидкость для легковых автомобилей',
    specifications: {
      standard: 'DOT 3',
      boilingPoint: '+205°C',
      application: 'Легковые автомобили'
    }
  },
  {
    id: 7,
    name: 'Hi-Gear Очиститель двигателя',
    brand: 'Hi-Gear',
    category: 'Очистители',
    type: 'Обезжириватель',
    volume: '946мл',
    price: 350,
    stock: 'В наличии',
    image: '/img/f5d638b5-8935-4c40-ab33-bac2979a445f.jpg',
    description: 'Профессиональный очиститель для наружной мойки двигателя и подкапотного пространства',
    specifications: {
      application: 'Двигатель, детали',
      color: 'Прозрачный'
    }
  },
  {
    id: 8,
    name: 'Sonax Омыватель стекол зимний',
    brand: 'Sonax',
    category: 'Омыватели',
    type: 'Зимний',
    volume: '4л',
    price: 280,
    stock: 'В наличии',
    image: '/img/f5d638b5-8935-4c40-ab33-bac2979a445f.jpg',
    description: 'Концентрированная жидкость для омывания стекол в зимний период',
    specifications: {
      freezingPoint: 'до -25°C',
      application: 'Омыватель стекол'
    }
  },
  {
    id: 9,
    name: 'Liqui Moly Автошампунь',
    brand: 'Liqui Moly',
    category: 'Автошампуни',
    type: 'Концентрат',
    volume: '1л',
    price: 420,
    stock: 'В наличии',
    image: '/img/f5d638b5-8935-4c40-ab33-bac2979a445f.jpg',
    description: 'Концентрированный автошампунь для бесконтактной мойки',
    specifications: {
      application: 'Кузов автомобиля',
      color: 'Желтый'
    }
  },
  {
    id: 10,
    name: 'Shell Spirax S4 ATF HDX',
    brand: 'Shell',
    category: 'Трансмиссионная жидкость',
    type: 'ATF',
    volume: '4л',
    price: 2800,
    stock: 'В наличии',
    image: '/img/09f9e4dc-f203-472f-bd71-2db5ad250b68.jpg',
    description: 'Синтетическая жидкость для автоматических трансмиссий',
    specifications: {
      standard: 'Dexron VI',
      application: 'АКПП, гидроусилитель'
    }
  }
];