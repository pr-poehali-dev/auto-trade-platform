import Icon from '@/components/ui/icon';
import ProductCard from './ProductCard';
import { OilProduct, TireProduct, ChemicalProduct } from '@/data/products';

interface ProductGridProps {
  selectedCategory: string;
  filteredOils: OilProduct[];
  filteredTires: TireProduct[];
  filteredChemicals: ChemicalProduct[];
}

export default function ProductGrid({ selectedCategory, filteredOils, filteredTires, filteredChemicals }: ProductGridProps) {
  const hasResults = (selectedCategory === 'all' || selectedCategory === 'oils' ? filteredOils.length > 0 : false) ||
                    (selectedCategory === 'all' || selectedCategory === 'tires' ? filteredTires.length > 0 : false) ||
                    (selectedCategory === 'all' || selectedCategory === 'chemicals' ? filteredChemicals.length > 0 : false);

  if (!hasResults) {
    return (
      <div className="text-center py-12">
        <Icon name="Search" size={48} className="text-slate-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-slate-600 mb-2">Товары не найдены</h3>
        <p className="text-slate-500">Попробуйте изменить параметры поиска или фильтры</p>
      </div>
    );
  }

  return (
    <>
      {/* Oil Products */}
      {(selectedCategory === 'all' || selectedCategory === 'oils') && filteredOils.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Icon name="Droplet" size={24} className="text-blue-600 mr-2" />
            Автомобильные масла ({filteredOils.length})
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredOils.map((product) => (
              <ProductCard key={product.id} product={product} type="oil" />
            ))}
          </div>
        </div>
      )}

      {/* Tire Products */}
      {(selectedCategory === 'all' || selectedCategory === 'tires') && filteredTires.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Icon name="Circle" size={24} className="text-orange-600 mr-2" />
            Автомобильные шины ({filteredTires.length})
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTires.map((product) => (
              <ProductCard key={product.id} product={product} type="tire" />
            ))}
          </div>
        </div>
      )}

      {/* Chemical Products */}
      {(selectedCategory === 'all' || selectedCategory === 'chemicals') && filteredChemicals.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Icon name="Flask" size={24} className="text-green-600 mr-2" />
            Автохимия ({filteredChemicals.length})
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredChemicals.map((product) => (
              <ProductCard key={product.id} product={product} type="chemical" />
            ))}
          </div>
        </div>
      )}
    </>
  );
}