import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const rings = [
    {
      id: 1,
      name: "Лунное Сияние",
      price: 45000,
      image: "img/f3f0486f-e8ad-46cd-aec1-b07a56875913.jpg",
      metal: "Серебро 925",
      stone: "Лунный камень",
      collection: "Lune Blanche",
      energy: "Интуиция и женственность"
    },
    {
      id: 2,
      name: "Розовые Грёзы",
      price: 55000,
      image: "img/4bae9eda-79e2-4b31-8b6a-a044b24316d4.jpg",
      metal: "Белое золото 14к",
      stone: "Розовый кварц",
      collection: "Quartz Rosé",
      energy: "Любовь и мягкость"
    },
    {
      id: 3,
      name: "Чистый Свет",
      price: 42000,
      image: "img/7e51bedc-1585-4243-a93c-9a651f1e548e.jpg",
      metal: "Серебро 925",
      stone: "Белый кварц",
      collection: "Sérénité",
      energy: "Ясность и чистота"
    }
  ];

  const collections = [
    {
      name: "Lune Blanche",
      description: "Коллекция с лунным камнем — символом интуиции и внутренней мудрости",
      icon: "Moon"
    },
    {
      name: "Quartz Rosé",
      description: "Нежные кольца с розовым кварцем для привлечения любви",
      icon: "Heart"
    },
    {
      name: "Sérénité",
      description: "Минималистичный дизайн с белым кварцем для душевного спокойствия",
      icon: "Sparkles"
    }
  ];

  const stones = [
    {
      name: "Лунный камень",
      properties: "Развивает интуицию, усиливает женственность, защищает от негатива",
      color: "Голубоватый перелив"
    },
    {
      name: "Розовый кварц",
      properties: "Привлекает любовь, успокаивает сердце, развивает самопринятие",
      color: "Нежно-розовый"
    },
    {
      name: "Белый кварц",
      properties: "Очищает энергетику, дает ясность мыслей, усиливает концентрацию",
      color: "Прозрачно-белый"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-moonstone-light to-white">
      {/* Навигация */}
      <nav className="p-6 flex justify-between items-center">
        <h1 className="font-cormorant text-3xl font-bold text-gray-800">LUNARA</h1>
        <div className="flex gap-6 font-opensans">
          <a href="#catalog" className="text-gray-600 hover:text-gray-800 transition-colors">Каталог</a>
          <a href="#collections" className="text-gray-600 hover:text-gray-800 transition-colors">Коллекции</a>
          <a href="#stones" className="text-gray-600 hover:text-gray-800 transition-colors">О камнях</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">Контакты</a>
        </div>
      </nav>

      {/* Герой блок */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-cormorant text-6xl font-light text-gray-800 mb-6">
            Украшения, в которых живёт
            <br />
            <span className="animate-moonlight">лунный свет</span>
          </h2>
          <p className="font-opensans text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Кольца из серебра и белого золота с лунным камнем, розовым и белым кварцем. 
            Каждое украшение создано с любовью и несёт особую энергетику.
          </p>
          <Button 
            size="lg" 
            className="bg-moonstone-silver hover:bg-moonstone-dark text-white px-8 py-4 text-lg"
            onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Смотреть коллекцию
          </Button>
        </div>
      </section>

      {/* Каталог */}
      <section id="catalog" className="py-20 bg-white/70">
        <div className="container mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-bold text-center text-gray-800 mb-4">Каталог украшений</h2>
          <p className="font-opensans text-gray-600 text-center mb-12">Выберите кольцо, которое откликается вашей душе</p>
          
          {/* Фильтры */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Badge variant="outline" className="cursor-pointer hover:bg-moonstone-light">Все</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-moonstone-light">Серебро</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-moonstone-light">Белое золото</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-moonstone-light">Лунный камень</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-moonstone-light">Розовый кварц</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-moonstone-light">Белый кварц</Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rings.map((ring) => (
              <Card key={ring.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={ring.image} 
                    alt={ring.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-2 bg-moonstone-light text-gray-700">
                    {ring.collection}
                  </Badge>
                  <h3 className="font-cormorant text-2xl font-bold text-gray-800 mb-2">{ring.name}</h3>
                  <p className="font-opensans text-sm text-gray-600 mb-1">{ring.metal} • {ring.stone}</p>
                  <p className="font-opensans text-sm text-gray-500 mb-4 italic">{ring.energy}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-opensans text-xl font-bold text-gray-800">
                      {ring.price.toLocaleString()} ₽
                    </span>
                    <Button size="sm" className="bg-moonstone-silver hover:bg-moonstone-dark text-white">
                      В корзину
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Коллекции */}
      <section id="collections" className="py-20 bg-gradient-to-r from-moonstone-light to-moonstone">
        <div className="container mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-bold text-center text-gray-800 mb-12">Наши коллекции</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {collections.map((collection, index) => (
              <Card key={index} className="text-center p-8 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors">
                <Icon name={collection.icon as any} size={48} className="mx-auto mb-4 text-moonstone-dark" />
                <h3 className="font-cormorant text-2xl font-bold text-gray-800 mb-4">{collection.name}</h3>
                <p className="font-opensans text-gray-600">{collection.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Символика камней */}
      <section id="stones" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-bold text-center text-gray-800 mb-4">Сила камней</h2>
          <p className="font-opensans text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Каждый камень несёт особую энергетику и помогает раскрыть ваш внутренний потенциал
          </p>

          <Tabs defaultValue="moonstone" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-moonstone-light">
              <TabsTrigger value="moonstone" className="data-[state=active]:bg-white">Лунный камень</TabsTrigger>
              <TabsTrigger value="rose-quartz" className="data-[state=active]:bg-white">Розовый кварц</TabsTrigger>
              <TabsTrigger value="white-quartz" className="data-[state=active]:bg-white">Белый кварц</TabsTrigger>
            </TabsList>
            
            {stones.map((stone, index) => (
              <TabsContent 
                key={index} 
                value={index === 0 ? "moonstone" : index === 1 ? "rose-quartz" : "white-quartz"}
                className="mt-8"
              >
                <Card className="p-8 bg-gradient-to-br from-moonstone-light to-white">
                  <div className="text-center">
                    <h3 className="font-cormorant text-3xl font-bold text-gray-800 mb-4">{stone.name}</h3>
                    <Badge variant="outline" className="mb-6">{stone.color}</Badge>
                    <p className="font-opensans text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                      {stone.properties}
                    </p>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* О бренде */}
      <section className="py-20 bg-gradient-to-t from-moonstone-light to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cormorant text-4xl font-bold text-gray-800 mb-8">О бренде Lunara</h2>
            <p className="font-opensans text-lg text-gray-600 mb-6 leading-relaxed">
              Lunara — это соединение природной красоты камней с утончённым дизайном. 
              Мы создаём украшения, которые не просто украшают, а несут особую энергетику и смысл.
            </p>
            <p className="font-opensans text-lg text-gray-600 mb-8 leading-relaxed">
              Каждое кольцо изготавливается вручную из качественных материалов: серебра 925 пробы 
              и белого золота 14к. Мы тщательно отбираем камни, чтобы каждое украшение обладало 
              уникальной красотой и энергией.
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-500">
              <div className="text-center">
                <Icon name="Award" size={24} className="mx-auto mb-2 text-moonstone-dark" />
                <p>Ручная работа</p>
              </div>
              <div className="text-center">
                <Icon name="Gem" size={24} className="mx-auto mb-2 text-moonstone-dark" />
                <p>Натуральные камни</p>
              </div>
              <div className="text-center">
                <Icon name="Shield" size={24} className="mx-auto mb-2 text-moonstone-dark" />
                <p>Гарантия качества</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-20 bg-moonstone-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl font-bold mb-8">Связаться с нами</h2>
          <p className="font-opensans text-lg mb-12 opacity-90">
            Готовы помочь выбрать идеальное украшение или ответить на ваши вопросы
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-moonstone-dark">
              <Icon name="Send" size={20} className="mr-2" />
              Telegram
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-moonstone-dark">
              <Icon name="Instagram" size={20} className="mr-2" />
              Instagram
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-moonstone-dark">
              <Icon name="Mail" size={20} className="mr-2" />
              Почта
            </Button>
          </div>
          <p className="font-opensans text-sm opacity-75">
            Доставка по всей России • Возможность кастомизации • Подарочная упаковка
          </p>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <p className="font-opensans text-sm">
          © 2024 Lunara. Украшения, в которых живёт лунный свет.
        </p>
      </footer>
    </div>
  );
};

export default Index;