import React from 'react';
import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">О компании ШинОил</h2>
            <p className="text-slate-600 mb-4">
              Более 15 лет мы специализируемся на оптовых поставках автомобильных масел и шин. 
              Наша компания является официальным дистрибьютором ведущих мировых брендов в России.
            </p>
            <p className="text-slate-600 mb-6">
              Мы работаем с автосервисами, станциями техобслуживания, автодилерами и розничными 
              магазинами по всей стране, предлагая качественную продукцию по конкурентным ценам.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={20} className="text-green-600" />
                <span>Более 5000 клиентов</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={20} className="text-green-600" />
                <span>Собственные склады</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={20} className="text-green-600" />
                <span>Быстрая логистика</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={20} className="text-green-600" />
                <span>Сертифицированная продукция</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-slate-600">лет на рынке</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-slate-600">брендов в каталоге</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-slate-600">товарных позиций</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">85+</div>
              <div className="text-slate-600">регионов доставки</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}