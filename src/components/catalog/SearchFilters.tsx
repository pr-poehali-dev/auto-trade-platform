import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedBrand: string;
  setSelectedBrand: (value: string) => void;
  selectedViscosity: string;
  setSelectedViscosity: (value: string) => void;
  selectedSeason: string;
  setSelectedSeason: (value: string) => void;
  selectedTireSize: string;
  setSelectedTireSize: (value: string) => void;
  selectedChemicalType: string;
  setSelectedChemicalType: (value: string) => void;
  selectedStock: string;
  setSelectedStock: (value: string) => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  showFilters: boolean;
  setShowFilters: (value: boolean) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
}

export default function SearchFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedBrand,
  setSelectedBrand,
  selectedViscosity,
  setSelectedViscosity,
  selectedSeason,
  setSelectedSeason,
  selectedTireSize,
  setSelectedTireSize,
  selectedChemicalType,
  setSelectedChemicalType,
  selectedStock,
  setSelectedStock,
  priceRange,
  setPriceRange,
  showFilters,
  setShowFilters,
  sortBy,
  setSortBy
}: SearchFiltersProps) {
  return (
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
              <SelectItem value="chemicals">Автохимия</SelectItem>
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
          <div className="grid lg:grid-cols-6 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Бренд</label>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger>
                  <SelectValue placeholder="Все бренды" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все бренды</SelectItem>
                  <SelectItem value="Liqui Moly">Liqui Moly</SelectItem>
                  <SelectItem value="Shell">Shell</SelectItem>
                  <SelectItem value="Castrol">Castrol</SelectItem>
                  <SelectItem value="Mobil">Mobil</SelectItem>
                  <SelectItem value="Lukoil">Lukoil</SelectItem>
                  <SelectItem value="Total">Total</SelectItem>
                  <SelectItem value="Rosneft">Rosneft</SelectItem>
                  <SelectItem value="Michelin">Michelin</SelectItem>
                  <SelectItem value="Continental">Continental</SelectItem>
                  <SelectItem value="Bridgestone">Bridgestone</SelectItem>
                  <SelectItem value="Nokian">Nokian</SelectItem>
                  <SelectItem value="Pirelli">Pirelli</SelectItem>
                  <SelectItem value="Yokohama">Yokohama</SelectItem>
                  <SelectItem value="Felix">Felix</SelectItem>
                  <SelectItem value="ATE">ATE</SelectItem>
                  <SelectItem value="Hi-Gear">Hi-Gear</SelectItem>
                  <SelectItem value="Sonax">Sonax</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Фильтр вязкости для масел */}
            {(selectedCategory === 'all' || selectedCategory === 'oils') && (
              <div>
                <label className="text-sm font-medium mb-2 block">Вязкость</label>
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
            )}

            {/* Фильтр сезона для шин */}
            {(selectedCategory === 'all' || selectedCategory === 'tires') && (
              <div>
                <label className="text-sm font-medium mb-2 block">Сезон</label>
                <Select value={selectedSeason} onValueChange={setSelectedSeason}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все сезоны" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все сезоны</SelectItem>
                    <SelectItem value="Летние">Летние</SelectItem>
                    <SelectItem value="Зимние">Зимние</SelectItem>
                    <SelectItem value="Всесезонные">Всесезонные</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Фильтр размера для шин */}
            {(selectedCategory === 'all' || selectedCategory === 'tires') && (
              <div>
                <label className="text-sm font-medium mb-2 block">Размер</label>
                <Select value={selectedTireSize} onValueChange={setSelectedTireSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все размеры" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все размеры</SelectItem>
                    <SelectItem value="195/65 R15">195/65 R15</SelectItem>
                    <SelectItem value="205/55 R16">205/55 R16</SelectItem>
                    <SelectItem value="215/60 R16">215/60 R16</SelectItem>
                    <SelectItem value="225/50 R17">225/50 R17</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Фильтр типа для автохимии */}
            {(selectedCategory === 'all' || selectedCategory === 'chemicals') && (
              <div>
                <label className="text-sm font-medium mb-2 block">Тип химии</label>
                <Select value={selectedChemicalType} onValueChange={setSelectedChemicalType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все типы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все типы</SelectItem>
                    <SelectItem value="Антифриз">Антифриз</SelectItem>
                    <SelectItem value="Тормозная жидкость">Тормозная жидкость</SelectItem>
                    <SelectItem value="Промывка двигателя">Промывка двигателя</SelectItem>
                    <SelectItem value="Очиститель стекол">Очиститель стекол</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Фильтр наличия */}
            <div>
              <label className="text-sm font-medium mb-2 block">Наличие</label>
              <Select value={selectedStock} onValueChange={setSelectedStock}>
                <SelectTrigger>
                  <SelectValue placeholder="Все товары" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все товары</SelectItem>
                  <SelectItem value="В наличии">В наличии</SelectItem>
                  <SelectItem value="Мало">Мало</SelectItem>
                  <SelectItem value="Под заказ">Под заказ</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Ценовой диапазон */}
            <div className="lg:col-span-2">
              <label className="text-sm font-medium mb-2 block">
                Ценовой диапазон: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
              </label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={100000}
                min={0}
                step={500}
                className="mt-2"
              />
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}