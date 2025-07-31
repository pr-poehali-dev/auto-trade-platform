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
  );
}