import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">Оптовые поставки автомасел и шин</h2>
        <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Прямые поставки от ведущих производителей. Качественные масла и шины 
          по выгодным ценам для автосервисов, станций техобслуживания и дилеров.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white"
            onClick={() => navigate('/catalog')}
          >
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Посмотреть каталог
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
            <Icon name="FileText" size={20} className="mr-2" />
            Получить прайс-лист
          </Button>
        </div>
      </div>
    </section>
  );
}