import React from 'react';
import Icon from '@/components/ui/icon';

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Truck" size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
            <p className="text-slate-600">Доставка по всей России</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={32} className="text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
            <p className="text-slate-600">Работаем только с сертифицированными поставщиками. Полная гарантия на всю продукцию</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="PiggyBank" size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Выгодные цены</h3>
            <p className="text-slate-600">Прямые контракты с производителями. Специальные условия для постоянных клиентов</p>
          </div>
        </div>
      </div>
    </section>
  );
}