import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const oilProducts = [
    {
      name: "MOBIL 1 ESP 5W-30",
      type: "Синтетическое моторное масло",
      viscosity: "5W-30",
      volume: "4л, 20л, 208л",
      specs: ["API SP", "ACEA C2/C3", "MB 229.31", "BMW LL-04"],
      price: "от 2,850 ₽",
      description: "Полностью синтетическое моторное масло премиум-класса"
    },
    {
      name: "SHELL Helix Ultra 0W-20",
      type: "Синтетическое моторное масло",
      viscosity: "0W-20",
      volume: "4л, 20л, 209л",
      specs: ["API SP", "ILSAC GF-6A", "Toyota", "Honda"],
      price: "от 3,200 ₽",
      description: "Современное полностью синтетическое масло для новых двигателей"
    },
    {
      name: "CASTROL GTX 10W-40",
      type: "Полусинтетическое моторное масло",
      viscosity: "10W-40",
      volume: "4л, 20л, 208л",
      specs: ["API SN", "ACEA A3/B4", "MB 229.1", "VW 501.01"],
      price: "от 1,950 ₽",
      description: "Надежная защита двигателя в любых условиях эксплуатации"
    }
  ];

  const tireProducts = [
    {
      name: "MICHELIN Pilot Sport 4",
      type: "Летние шины",
      size: "225/45 R17",
      features: ["Отличное сцепление", "Низкий шум", "Экономия топлива"],
      price: "от 8,500 ₽",
      description: "Премиальные летние шины для спортивного вождения"
    },
    {
      name: "BRIDGESTONE Blizzak WS90",
      type: "Зимние шины",
      size: "215/60 R16",
      features: ["Шипованные", "Сцепление на льду", "Износостойкость"],
      price: "от 6,200 ₽",
      description: "Надежные зимние шины для суровых условий"
    },
    {
      name: "GOODYEAR Vector 4Seasons",
      type: "Всесезонные шины",
      size: "205/55 R16",
      features: ["Всесезонность", "Долговечность", "Комфорт"],
      price: "от 4,800 ₽",
      description: "Универсальные шины для круглогодичного использования"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/img/2d64d5a1-e700-4cb5-9587-032ae1536e5d.jpg" 
                  alt="ШинОил логотип" 
                  className="w-12 h-12 object-contain"
                />
                <h1 className="text-2xl font-bold font-roboto text-navy-600">ШинОил</h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-gray-600 hover:text-orange-500 transition-colors font-open-sans">Каталог</a>
              <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors font-open-sans">О компании</a>
              <a href="#wholesale" className="text-gray-600 hover:text-orange-500 transition-colors font-open-sans">Оптовикам</a>
              <a href="#contacts" className="text-gray-600 hover:text-orange-500 transition-colors font-open-sans">Контакты</a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-open-sans">
                Заказать звонок
              </Button>
            </nav>
            <Button variant="outline" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-600 to-navy-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(/img/d1bee336-eb8d-4cfc-8091-ae51283d94cd.jpg)` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-roboto mb-6 leading-tight">
              Оптовые поставки <span className="text-orange-500">автомобильных масел</span> и шин
            </h1>
            <p className="text-xl md:text-2xl font-open-sans mb-8 text-gray-200">
              Прямые поставки от ведущих производителей. Конкурентные цены для оптовых покупателей.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-open-sans text-lg px-8 py-4">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Открыть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-600 font-open-sans text-lg px-8 py-4">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить прайс
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold font-roboto mb-2">Быстрая доставка</h3>
              <p className="text-gray-600 font-open-sans">Доставка по всей России в течение 1-3 дней</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold font-roboto mb-2">Гарантия качества</h3>
              <p className="text-gray-600 font-open-sans">Только оригинальная продукция от производителей</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold font-roboto mb-2">Персональный менеджер</h3>
              <p className="text-gray-600 font-open-sans">Индивидуальный подход к каждому клиенту</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold font-roboto mb-2">Гибкая оплата</h3>
              <p className="text-gray-600 font-open-sans">Наличный и безналичный расчет, отсрочка платежа</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-roboto text-navy-600 mb-4">Каталог продукции</h2>
            <p className="text-xl text-gray-600 font-open-sans">Широкий ассортимент моторных масел и шин от ведущих производителей</p>
          </div>

          <Tabs defaultValue="oils" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="oils" className="text-lg font-open-sans">
                <Icon name="Droplets" size={20} className="mr-2" />
                Моторные масла
              </TabsTrigger>
              <TabsTrigger value="tires" className="text-lg font-open-sans">
                <Icon name="Circle" size={20} className="mr-2" />
                Шины
              </TabsTrigger>
            </TabsList>

            <TabsContent value="oils">
              <div className="grid md:grid-cols-3 gap-8">
                {oilProducts.map((product, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
                    <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-50 relative overflow-hidden">
                      <img 
                        src="/img/7bba4080-240b-4a02-bf40-5541b6c76393.jpg" 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl font-roboto text-navy-600">{product.name}</CardTitle>
                        <Badge variant="secondary" className="bg-orange-100 text-orange-700">{product.viscosity}</Badge>
                      </div>
                      <CardDescription className="font-open-sans">{product.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-sm text-gray-600 font-open-sans">Объемы:</span>
                          <p className="text-sm text-gray-700 font-open-sans">{product.volume}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-sm text-gray-600 font-open-sans">Спецификации:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {product.specs.map((spec, i) => (
                              <Badge key={i} variant="outline" className="text-xs">{spec}</Badge>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 font-open-sans">{product.description}</p>
                        <div className="flex justify-between items-center pt-4">
                          <span className="text-2xl font-bold text-orange-500 font-roboto">{product.price}</span>
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-open-sans">
                            В корзину
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tires">
              <div className="grid md:grid-cols-3 gap-8">
                {tireProducts.map((product, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
                    <div className="h-48 bg-gradient-to-br from-navy-100 to-navy-50 relative overflow-hidden">
                      <img 
                        src="/img/4c289d44-a779-4a8f-a7fe-ee338f454b10.jpg" 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl font-roboto text-navy-600">{product.name}</CardTitle>
                        <Badge variant="secondary" className="bg-navy-100 text-navy-700">{product.size}</Badge>
                      </div>
                      <CardDescription className="font-open-sans">{product.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-sm text-gray-600 font-open-sans">Особенности:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {product.features.map((feature, i) => (
                              <Badge key={i} variant="outline" className="text-xs">{feature}</Badge>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 font-open-sans">{product.description}</p>
                        <div className="flex justify-between items-center pt-4">
                          <span className="text-2xl font-bold text-orange-500 font-roboto">{product.price}</span>
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-open-sans">
                            В корзину
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold font-roboto text-navy-600 mb-6">О компании</h2>
              <p className="text-lg text-gray-700 font-open-sans mb-6">
                «ШинОил» — ведущий поставщик автомобильных масел и шин на российском рынке. 
                Более 15 лет мы обеспечиваем автосервисы, дилерские центры и розничные магазины 
                качественной продукцией от мировых производителей.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-orange-500" />
                  <span className="font-open-sans">Прямые контракты с производителями</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-orange-500" />
                  <span className="font-open-sans">Собственная логистическая сеть</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-orange-500" />
                  <span className="font-open-sans">Более 500 постоянных клиентов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-orange-500" />
                  <span className="font-open-sans">Сертифицированная продукция</span>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="bg-navy-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold font-roboto mb-6">Наши достижения</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 font-roboto">15+</div>
                    <div className="text-sm font-open-sans">лет на рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 font-roboto">500+</div>
                    <div className="text-sm font-open-sans">клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 font-roboto">50+</div>
                    <div className="text-sm font-open-sans">брендов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 font-roboto">24/7</div>
                    <div className="text-sm font-open-sans">поддержка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section id="wholesale" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-roboto text-navy-600 mb-4">Условия для оптовиков</h2>
            <p className="text-xl text-gray-600 font-open-sans">Специальные условия для постоянных партнеров</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-200 animate-fade-in">
              <CardHeader className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Package" size={32} className="text-orange-500" />
                </div>
                <CardTitle className="text-2xl font-roboto text-navy-600">Стартовый</CardTitle>
                <CardDescription className="font-open-sans">От 100 000 ₽ в месяц</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-orange-500" />
                    <span className="font-open-sans">Скидка 5%</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-orange-500" />
                    <span className="font-open-sans">Отсрочка 14 дней</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-orange-500" />
                    <span className="font-open-sans">Персональный менеджер</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-400 relative animate-fade-in">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-4 py-1">Популярный</Badge>
              </div>
              <CardHeader className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={32} className="text-orange-500" />
                </div>
                <CardTitle className="text-2xl font-roboto text-navy-600">Профессиональный</CardTitle>
                <CardDescription className="font-open-sans">От 500 000 ₽ в месяц</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-orange-500" />
                    <span className="font-open-sans">Скидка 10%</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-orange-500" />
                    <span className="font-open-sans">Отсрочка 30 дней</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-orange-500" />
                    <span className="font-open-sans">Бесплатная доставка</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-orange-500" />
                    <span className="font-open-sans">Маркетинговая поддержка</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 animate-fade-in">
              <CardHeader className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Crown" size={32} className="text-orange-500" />
                </div>
                <CardTitle className="text-2xl font-roboto text-navy-600">Премиум</CardTitle>
                <CardDescription className="font-open-sans">От 1 000 000 ₽ в месяц</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-orange-500" />
                    <span className="font-open-sans">Скидка 15%</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-orange-500" />
                    <span className="font-open-sans">Отсрочка 45 дней</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-orange-500" />
                    <span className="font-open-sans">Эксклюзивные продукты</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-orange-500" />
                    <span className="font-open-sans">Индивидуальные условия</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-navy-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-roboto mb-4">Контакты</h2>
            <p className="text-xl font-open-sans opacity-90">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white animate-fade-in">
              <CardContent className="p-6 text-center">
                <Icon name="Phone" size={48} className="text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold font-roboto mb-2">Телефон</h3>
                <p className="font-open-sans text-lg">+7 (495) 123-45-67</p>
                <p className="font-open-sans text-sm opacity-75">Ежедневно 9:00 - 21:00</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white animate-fade-in">
              <CardContent className="p-6 text-center">
                <Icon name="Mail" size={48} className="text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold font-roboto mb-2">Email</h3>
                <p className="font-open-sans text-lg">info@automasla-plus.ru</p>
                <p className="font-open-sans text-sm opacity-75">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white animate-fade-in">
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" size={48} className="text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold font-roboto mb-2">Адрес</h3>
                <p className="font-open-sans text-lg">г. Москва, ул. Складская, 15</p>
                <p className="font-open-sans text-sm opacity-75">Склад и офис продаж</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/img/2d64d5a1-e700-4cb5-9587-032ae1536e5d.jpg" 
                  alt="ШинОил логотип" 
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-xl font-bold font-roboto">ШинОил</h3>
              </div>
              <p className="text-gray-400 font-open-sans">
                Ваш надежный партнер в мире автомобильных масел и шин
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold font-roboto mb-4">Продукция</h4>
              <ul className="space-y-2 font-open-sans text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Моторные масла</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Трансмиссионные масла</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Летние шины</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Зимние шины</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold font-roboto mb-4">Компания</h4>
              <ul className="space-y-2 font-open-sans text-gray-400">
                <li><a href="#about" className="hover:text-orange-500 transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Карьера</a></li>
                <li><a href="#contacts" className="hover:text-orange-500 transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold font-roboto mb-4">Поддержка</h4>
              <ul className="space-y-2 font-open-sans text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Возврат товара</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-open-sans">
              © 2024 ШинОил. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;