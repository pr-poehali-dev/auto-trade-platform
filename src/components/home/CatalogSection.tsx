import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export default function CatalogSection() {
  const navigate = useNavigate();

  return (
    <section id="catalog" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Каталог товаров</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                <Icon name="Droplets" size={24} className="text-blue-600" />
              </div>
              <CardTitle>Моторные масла</CardTitle>
              <CardDescription>Синтетические, полусинтетические, минеральные</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">Mobil, Castrol, Shell, Lukoil, Rosneft</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/catalog')}
              >
                <Icon name="Eye" size={16} className="mr-2" />
                Смотреть все
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                <Icon name="Cog" size={24} className="text-orange-600" />
              </div>
              <CardTitle>Трансмиссионные масла</CardTitle>
              <CardDescription>Для механических и автоматических КПП</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">ATF, CVT, дифференциальные масла</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/catalog')}
              >
                <Icon name="Eye" size={16} className="mr-2" />
                Смотреть все
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                <Icon name="Circle" size={24} className="text-green-600" />
              </div>
              <CardTitle>Летние шины</CardTitle>
              <CardDescription>Легковые, грузовые, внедорожные</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">Michelin, Bridgestone, Continental, Nokian</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/catalog')}
              >
                <Icon name="Eye" size={16} className="mr-2" />
                Смотреть все
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                <Icon name="Snowflake" size={24} className="text-cyan-600" />
              </div>
              <CardTitle>Зимние шины</CardTitle>
              <CardDescription>Шипованные и фрикционные</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">Nokian, Gislaved, Pirelli, Yokohama</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/catalog')}
              >
                <Icon name="Eye" size={16} className="mr-2" />
                Смотреть все
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                <Icon name="Flask" size={24} className="text-purple-600" />
              </div>
              <CardTitle>Автохимия</CardTitle>
              <CardDescription>Антифризы, тормозные жидкости, очистители</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">Felix, ATE, Castrol, Hi-Gear, Sonax</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/catalog')}
              >
                <Icon name="Eye" size={16} className="mr-2" />
                Смотреть все
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}