import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedViscosity, setSelectedViscosity] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('name');

  const oilProducts = [
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

  const tireProducts = [
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
      image: '/img/8ab4bac8-79ad-4019-8b7d-d31868e0де4f.jpg',
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

  // Filtering logic
  const filteredOils = oilProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
    const matchesViscosity = selectedViscosity === 'all' || product.viscosity === selectedViscosity;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesBrand && matchesViscosity && matchesPrice;
  });

  const filteredTires = tireProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.size.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesBrand && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/ac28145d-d3ec-465c-95bd-abbb00746be8.png" 
                alt="ШинОил лого" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-slate-900">ШинОил</h1>
                <p className="text-sm text-slate-600">Каталог товаров</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-slate-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="/catalog" className="text-blue-600 font-medium">Каталог</a>
              <a href="#prices" className="text-slate-700 hover:text-blue-600 transition-colors">Цены</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Icon name="Phone" size={16} />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Каталог товаров</h2>
          <p className="text-slate-600">Более 5000 наименований автомасел и шин в наличии</p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <Input 
                placeholder="Поиск по названию, бренду, артикулу, размеру..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 text-lg"
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 h-12">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все товары</SelectItem>
                  <SelectItem value="oils">Автомасла</SelectItem>
                  <SelectItem value="tires">Шины</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-48 h-12">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">По названию</SelectItem>
                  <SelectItem value="price-asc">Цена ↑</SelectItem>
                  <SelectItem value="price-desc">Цена ↓</SelectItem>
                  <SelectItem value="brand">По бренду</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="h-12 px-4"
              >
                <Icon name="Filter" size={20} />
                Фильтры
              </Button>
            </div>
          </div>
          
          {/* Extended Filters */}
          {showFilters && (
            <Card className="p-6">
              <div className="grid lg:grid-cols-4 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Бренд</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Все бренды" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все бренды</SelectItem>
                      <SelectItem value="Castrol">Castrol</SelectItem>
                      <SelectItem value="Mobil">Mobil</SelectItem>
                      <SelectItem value="Shell">Shell</SelectItem>
                      <SelectItem value="Lukoil">Lukoil</SelectItem>
                      <SelectItem value="Total">Total</SelectItem>
                      <SelectItem value="Rosneft">Rosneft</SelectItem>
                      <SelectItem value="Michelin">Michelin</SelectItem>
                      <SelectItem value="Continental">Continental</SelectItem>
                      <SelectItem value="Bridgestone">Bridgestone</SelectItem>
                      <SelectItem value="Nokian">Nokian</SelectItem>
                      <SelectItem value="Pirelli">Pirelli</SelectItem>
                      <SelectItem value="Yokohama">Yokohama</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Вязкость (для масел)</label>
                  <Select value={selectedViscosity} onValueChange={setSelectedViscosity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Все вязкости" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все вязкости</SelectItem>
                      <SelectItem value="5W-30">5W-30</SelectItem>
                      <SelectItem value="5W-40">5W-40</SelectItem>
                      <SelectItem value="10W-40">10W-40</SelectItem>
                      <SelectItem value="15W-40">15W-40</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="lg:col-span-2">
                  <label className="text-sm font-medium mb-2 block">
                    Ценовой диапазон: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={15000}
                    min={0}
                    step={100}
                    className="mt-2"
                  />
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-slate-600">
            Найдено товаров: {(selectedCategory === 'all' || selectedCategory === 'oils' ? filteredOils.length : 0) + 
                              (selectedCategory === 'all' || selectedCategory === 'tires' ? filteredTires.length : 0)}
          </p>
        </div>

        {/* Oil Products */}
        {(selectedCategory === 'all' || selectedCategory === 'oils') && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Icon name="Droplet" size={24} className="text-blue-600 mr-2" />
              Автомобильные масла ({filteredOils.length})
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredOils.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-3" />
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary">{product.category}</Badge>
                      <Badge variant="outline">{product.viscosity}</Badge>
                      <Badge variant="outline">{product.volume}</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700">Бренд: {product.brand}</span>
                        <span className={`text-sm px-2 py-1 rounded ${product.stock === 'В наличии' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {product.stock}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2">{product.description}</p>
                      <div className="text-xs text-slate-400 space-y-1">
                        <div>API: {product.specifications.api}</div>
                        <div>ACEA: {product.specifications.acea}</div>
                        <div>Температура: {product.specifications.temperature}</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">{product.price.toLocaleString()} ₽</span>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        <Icon name="ShoppingCart" size={16} />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Tire Products */}
        {(selectedCategory === 'all' || selectedCategory === 'tires') && (
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Icon name="Circle" size={24} className="text-orange-600 mr-2" />
              Автомобильные шины ({filteredTires.length})
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTires.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-3" />
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary">{product.season}</Badge>
                      <Badge variant="outline">{product.size}</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700">Бренд: {product.brand}</span>
                        <span className={`text-sm px-2 py-1 rounded ${product.stock === 'В наличии' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                          {product.stock}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2">{product.description}</p>
                      <div className="text-xs text-slate-400 space-y-1">
                        <div>Ширина: {product.specifications.width}</div>
                        <div>Индекс нагрузки: {product.specifications.loadIndex}</div>
                        {product.specifications.fuelEfficiency && (
                          <div>Топливная эффективность: {product.specifications.fuelEfficiency}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">{product.price.toLocaleString()} ₽</span>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Icon name="ShoppingCart" size={16} />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {((selectedCategory === 'oils' && filteredOils.length === 0) || 
          (selectedCategory === 'tires' && filteredTires.length === 0) ||
          (selectedCategory === 'all' && filteredOils.length === 0 && filteredTires.length === 0)) && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">Товары не найдены</h3>
            <p className="text-slate-500">Попробуйте изменить параметры поиска или фильтры</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-4">Не нашли нужный товар?</h3>
          <p className="text-xl mb-8 opacity-90">Свяжитесь с нами и мы подберем оптимальное решение для вашего бизнеса</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="MessageCircle" size={20} />
              Связаться с менеджером
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="Phone" size={20} />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}