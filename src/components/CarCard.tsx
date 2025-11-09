import { LucideIcon } from 'lucide-react';

interface CarSpec {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface Car {
  name: string;
  category: string;
  image: string;
  specs: CarSpec[];
  price: string;
}

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="group relative bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 hover:border-red-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20">
      <div className="relative h-64 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-red-600 px-4 py-1 rounded-full text-sm font-semibold">
          {car.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{car.name}</h3>

        <div className="space-y-3 mb-6">
          {car.specs.map((spec, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <spec.icon size={16} className="text-red-600" />
                <span>{spec.label}</span>
              </div>
              <span className="font-semibold">{spec.value}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <span className="text-2xl font-bold text-red-600">{car.price}</span>
          <button className="px-6 py-2 bg-white/10 hover:bg-red-600 rounded-lg transition-all font-semibold">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
