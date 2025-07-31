import React, { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Index() {
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ company: '', contact: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
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
              <a href="#catalog" className="text-slate-700 hover:text-blue-600 transition-colors">Каталог</a>
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Оптовые поставки автомасел и шин</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Прямые поставки от ведущих производителей. Качественные масла и шины 
            по выгодным ценам для автосервисов, станций техобслуживания и дилеров.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
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

      {/* Features */}
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

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Каталог товаров</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <Button variant="outline" className="w-full">
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
                <Button variant="outline" className="w-full">
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
                <Button variant="outline" className="w-full">
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
                <Button variant="outline" className="w-full">
                  <Icon name="Eye" size={16} className="mr-2" />
                  Смотреть все
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Order Form Section */}
      <section id="order" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Оставить заявку на оптовые поставки</h2>
              <p className="text-slate-600">
                Заполните форму и наш менеджер свяжется с вами для обсуждения условий сотрудничества
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Форма заявки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="company">Название компании</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="ООО «Ваша компания»"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="contact">Контактное лицо</Label>
                    <Input
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      placeholder="Иванов Иван Иванович"
                      required
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@company.ru"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Укажите интересующие товары, объемы закупок и другую важную информацию"
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-2 text-blue-600" />
                  Головной офис
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  г. Москва, ул. Промышленная, д. 15<br/>
                  БЦ "Автопарк", офис 301
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-2 text-green-600" />
                  Телефоны
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  +7 (495) 123-45-67<br/>
                  +7 (800) 555-01-02 (бесплатно)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-2 text-orange-600" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  info@shinoil.ru<br/>
                  sales@shinoil.ru
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Режим работы</h3>
            <p className="text-slate-600">
              Понедельник - Пятница: 9:00 - 18:00<br/>
              Суббота: 10:00 - 16:00<br/>
              Воскресенье: выходной
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}