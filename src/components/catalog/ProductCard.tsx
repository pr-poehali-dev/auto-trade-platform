import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface OilProduct {
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

interface TireProduct {
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

interface ProductCardProps {
  product: OilProduct | TireProduct;
  type: 'oil' | 'tire';
}

export default function ProductCard({ product, type }: ProductCardProps) {
  const isOil = type === 'oil';
  const oilProduct = product as OilProduct;
  const tireProduct = product as TireProduct;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-3" />
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription className="flex items-center gap-2 flex-wrap">
          {isOil ? (
            <>
              <Badge variant="secondary">{oilProduct.category}</Badge>
              <Badge variant="outline">{oilProduct.viscosity}</Badge>
              <Badge variant="outline">{oilProduct.volume}</Badge>
            </>
          ) : (
            <>
              <Badge variant="secondary">{tireProduct.season}</Badge>
              <Badge variant="outline">{tireProduct.size}</Badge>
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
            {isOil ? (
              <>
                <div>API: {oilProduct.specifications.api}</div>
                <div>ACEA: {oilProduct.specifications.acea}</div>
                <div>Температура: {oilProduct.specifications.temperature}</div>
              </>
            ) : (
              <>
                <div>Ширина: {tireProduct.specifications.width}</div>
                <div>Индекс нагрузки: {tireProduct.specifications.loadIndex}</div>
                {tireProduct.specifications.fuelEfficiency && (
                  <div>Топливная эффективность: {tireProduct.specifications.fuelEfficiency}</div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-2xl font-bold ${isOil ? 'text-blue-600' : 'text-orange-600'}`}>
            {product.price.toLocaleString()} ₽
          </span>
          <Button size="sm" className={isOil ? 'bg-orange-600 hover:bg-orange-700' : 'bg-blue-600 hover:bg-blue-700'}>
            <Icon name="ShoppingCart" size={16} />
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}