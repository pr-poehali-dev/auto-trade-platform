import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/ac28145d-d3ec-465c-95bd-abbb00746be8.png" 
              alt="АвтоОпт лого" 
              className="w-16 h-16 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-slate-800">ШинОил</h1>
              <p className="text-sm text-slate-600">Оптовые поставки автомасел и шин</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => navigate('/catalog')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Каталог
            </button>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">О компании</a>
            <a href="#order" className="text-slate-700 hover:text-blue-600 transition-colors">Заказ</a>
            <a href="#contacts" className="text-slate-700 hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
          <Button>
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </div>
    </header>
  );
}