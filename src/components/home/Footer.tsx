import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/ac28145d-d3ec-465c-95bd-abbb00746be8.png" 
                alt="ШинОил лого" 
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-xl font-bold">ШинОил</h3>
            </div>
            <p className="text-slate-300 text-sm">
              Надежный партнер в области оптовых поставок автомобильных масел и шин
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Моторные масла</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Трансмиссионные масла</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Летние шины</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Зимние шины</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <p>+7 (495) 123-45-67</p>
              <p>info@shinoil.ru</p>
              <p>г. Москва, ул. Промышленная, 15</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2024 ШинОил. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}