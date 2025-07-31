import React from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactsSection() {
  return (
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
  );
}