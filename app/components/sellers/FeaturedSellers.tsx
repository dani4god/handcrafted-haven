import Link from 'next/link';

const sellers = [
  {
    id: 1,
    name: 'ArtisanCo',
    specialty: 'Handmade Jewelry',
    items: 45,
    rating: 4.9,
    initials: 'AC',
  },
  {
    id: 2,
    name: 'ClayWorks',
    specialty: 'Pottery & Ceramics',
    items: 32,
    rating: 4.8,
    initials: 'CW',
  },
  {
    id: 3,
    name: 'TextileArt',
    specialty: 'Woven Textiles',
    items: 67,
    rating: 4.7,
    initials: 'TA',
  },
  {
    id: 4,
    name: 'WoodCraft',
    specialty: 'Wooden Items',
    items: 28,
    rating: 5.0,
    initials: 'WC',
  },
];

export default function FeaturedSellers() {
  return (
    <section className="py-16 px-6 bg-background">
      <h2 className="font-playfair text-3xl font-bold text-dark text-center mb-4">
        Featured Sellers
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Meet some of our talented artisans
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {sellers.map((seller) => (
          <Link
            key={seller.id}
            href={`/sellers/${seller.id}`}
            className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-secondary font-bold text-xl">
                {seller.initials}
              </span>
            </div>

            <h3 className="font-playfair font-bold text-dark text-lg mb-1">
              {seller.name}
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              {seller.specialty}
            </p>

            <div className="flex justify-center gap-4 text-sm">
              <span className="text-gray-400">
                {seller.items} items
              </span>

              <span className="text-accent">
                ⭐ {seller.rating}
              </span>
            </div>

            <div className="mt-4 text-sm text-primary font-bold hover:text-accent transition-colors">
              View Profile →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}