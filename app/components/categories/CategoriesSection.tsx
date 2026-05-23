import Link from 'next/link';

const categories = [
  { name: 'Jewelry', emoji: '💍', count: 124 },
  { name: 'Pottery', emoji: '🏺', count: 89 },
  { name: 'Textiles', emoji: '🧶', count: 156 },
  { name: 'Woodwork', emoji: '🪵', count: 73 },
  { name: 'Paintings', emoji: '🎨', count: 201 },
  { name: 'Candles', emoji: '🕯️', count: 95 },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 px-6 bg-secondary">
      <h2 className="font-playfair text-3xl font-bold text-dark text-center mb-4">
        Shop by Category
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Find exactly what you are looking for
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/shop?category=${category.name.toLowerCase()}`}
            className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow border border-gray-100 cursor-pointer"
          >
            <span className="text-4xl block mb-3">
              {category.emoji}
            </span>

            <h3 className="font-playfair font-bold text-dark text-sm mb-1">
              {category.name}
            </h3>

            <p className="text-xs text-gray-400">
              {category.count} items
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}