import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { OilProduct, TireProduct, ChemicalProduct } from '@/data/products';

interface ProductCardProps {
  product: OilProduct | TireProduct | ChemicalProduct;
  type: 'oil' | 'tire' | 'chemical';
}

export default function ProductCard({ product, type }: ProductCardProps) {
  const isOil = type === 'oil';
  const isTire = type === 'tire';
  const isChemical = type === 'chemical';
  const oilProduct = product as OilProduct;
  const tireProduct = product as TireProduct;
  const chemicalProduct = product as ChemicalProduct;

  const getProductColor = () => {
    if (isOil) return 'text-blue-600';
    if (isTire) return 'text-orange-600';
    return 'text-green-600';
  };

  const getButtonColor = () => {
    if (isOil) return 'bg-orange-600 hover:bg-orange-700';
    if (isTire) return 'bg-blue-600 hover:bg-blue-700';
    return 'bg-green-600 hover:bg-green-700';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-3" />
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription className="flex items-center gap-2 flex-wrap">
          {isOil && (
            <>
              <Badge variant="secondary">{oilProduct.category}</Badge>
              <Badge variant="outline">{oilProduct.viscosity}</Badge>
              <Badge variant="outline">{oilProduct.volume}</Badge>
            </>
          )}
          {isTire && (
            <>
              <Badge variant="secondary">{tireProduct.season}</Badge>
              <Badge variant="outline">{tireProduct.size}</Badge>
            </>
          )}
          {isChemical && (
            <>
              <Badge variant="secondary">{chemicalProduct.category}</Badge>
              <Badge variant="outline">{chemicalProduct.type}</Badge>
              <Badge variant="outline">{chemicalProduct.volume}</Badge>
            </>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-700">Бренд: {product.brand}</span>
            <span className={`text-sm px-2 py-1 rounded ${product.stock === 'В наличии' ? 'bg-green-100 text-green-700' : 
              product.stock === 'Мало' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
              {product.stock}
            </span>
          </div>
          <p className="text-xs text-slate-500 line-clamp-2">{product.description}</p>
          <div className="text-xs text-slate-400 space-y-1">
            {isOil && (
              <>
                <div>API: {oilProduct.specifications.api}</div>
                <div>ACEA: {oilProduct.specifications.acea}</div>
                <div>Температура: {oilProduct.specifications.temperature}</div>
              </>
            )}
            {isTire && (
              <>
                <div>Ширина: {tireProduct.specifications.width}</div>
                <div>Индекс нагрузки: {tireProduct.specifications.loadIndex}</div>
                {tireProduct.specifications.fuelEfficiency && (
                  <div>Топливная эффективность: {tireProduct.specifications.fuelEfficiency}</div>
                )}
              </>
            )}
            {isChemical && (
              <>
                {chemicalProduct.specifications.standard && (
                  <div>Стандарт: {chemicalProduct.specifications.standard}</div>
                )}
                {chemicalProduct.specifications.freezingPoint && (
                  <div>Температура замерзания: {chemicalProduct.specifications.freezingPoint}</div>
                )}
                {chemicalProduct.specifications.boilingPoint && (
                  <div>Температура кипения: {chemicalProduct.specifications.boilingPoint}</div>
                )}
                {chemicalProduct.specifications.application && (
                  <div>Применение: {chemicalProduct.specifications.application}</div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-2xl font-bold ${getProductColor()}`}>
            {product.price.toLocaleString()} ₽
          </span>
          <Button size="sm" className={getButtonColor()}>
            <Icon name="ShoppingCart" size={16} />
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}