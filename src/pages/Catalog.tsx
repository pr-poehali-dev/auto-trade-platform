import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SearchFilters from '@/components/catalog/SearchFilters';
import ProductGrid from '@/components/catalog/ProductGrid';
import { oilProducts, tireProducts, chemicalProducts } from '@/data/products';

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedViscosity, setSelectedViscosity] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('name');

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

  const filteredChemicals = chemicalProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
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
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Обновленный каталог товаров</h2>
          <p className="text-slate-600">Более 5000 наименований автомасел, шин и автохимии в наличии</p>
        </div>

        {/* Search and Filters */}
        <SearchFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          selectedViscosity={selectedViscosity}
          setSelectedViscosity={setSelectedViscosity}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-slate-600">
            Найдено товаров: {(selectedCategory === 'all' || selectedCategory === 'oils' ? filteredOils.length : 0) + 
                              (selectedCategory === 'all' || selectedCategory === 'tires' ? filteredTires.length : 0) +
                              (selectedCategory === 'all' || selectedCategory === 'chemicals' ? filteredChemicals.length : 0)}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Масла: {filteredOils.length}, Шины: {filteredTires.length}, Автохимия: {filteredChemicals.length}
          </p>
        </div>

        {/* Product Grid */}
        <ProductGrid
          selectedCategory={selectedCategory}
          filteredOils={filteredOils}
          filteredTires={filteredTires}
          filteredChemicals={filteredChemicals}
        />
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