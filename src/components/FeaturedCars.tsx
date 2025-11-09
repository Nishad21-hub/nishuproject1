import { Gauge, Zap, Settings } from 'lucide-react';
import CarCard from './CarCard';

export default function FeaturedCars() {
  const cars = [
    {
      name: 'VelocityX Phantom',
      category: 'Supercar',
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: [
        { icon: Gauge, label: '0-60 mph', value: '2.8s' },
        { icon: Zap, label: 'Top Speed', value: '217 mph' },
        { icon: Settings, label: 'Power', value: '750 HP' },
      ],
      price: '$289,000',
    },
    {
      name: 'VelocityX Eclipse',
      category: 'Electric GT',
      image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: [
        { icon: Gauge, label: '0-60 mph', value: '2.4s' },
        { icon: Zap, label: 'Range', value: '405 mi' },
        { icon: Settings, label: 'Power', value: '1020 HP' },
      ],
      price: '$195,000',
    },
    {
      name: 'VelocityX Apex',
      category: 'Luxury Sport',
      image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: [
        { icon: Gauge, label: '0-60 mph', value: '3.2s' },
        { icon: Zap, label: 'Top Speed', value: '198 mph' },
        { icon: Settings, label: 'Power', value: '620 HP' },
      ],
      price: '$159,000',
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="text-red-600">Collection</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Handcrafted perfection. Each model engineered to redefine performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
