import Link from 'next/link';

const sellers = [
  {
    id: 1,
    name: 'ArtisanCo',
    specialty: 'Handmade Jewelry',
    description:
      'We create beautiful handcrafted jewelry using ethically sourced materials. Each piece is unique and made with love.',
    items: 45,
    rating: 4.9,
    reviews: 128,
    initials: 'AC',
    location: 'Portland, OR',
  },
  {
    id: 2,
    name: 'ClayWorks',
    specialty: 'Pottery & Ceramics',
    description:
      'Handthrown pottery and ceramics inspired by nature. Each piece is fired in our wood kiln for a unique finish.',
    items: 32,
    rating: 4.8,
    reviews: 96,
    initials: 'CW',
    location: 'Santa Fe, NM',
  },
  {
    id: 3,
    name: 'TextileArt',
    specialty: 'Woven Textiles',
    description:
      'Traditional weaving techniques combined with modern designs. All our textiles are made from natural fibers.',
    items: 67,
    rating: 4.7,
    reviews: 213,
    initials: 'TA',
    location: 'Asheville, NC',
  },
  {
    id: 4,
    name: 'WoodCraft',
    specialty: 'Wooden Items',
    description:
      'Handcrafted wooden items made from sustainably sourced wood. From furniture to small decorative pieces.',
    items: 28,
    rating: 5.0,
    reviews: 74,
    initials: 'WC',
    location: 'Seattle, WA',
  },
  {
    id: 5,
    name: 'PaintedClay',
    specialty: 'Hand Painted Pottery',
    description:
      'Each piece is hand painted with intricate designs inspired by folk art traditions from around the world.',
    items: 53,
    rating: 4.6,
    reviews: 167,
    initials: 'PC',
    location: 'Taos, NM',
  },
  {
    id: 6,
    name: 'KnotDesigns',
    specialty: 'Macrame & Fiber Art',
    description:
      'Modern macrame and fiber art pieces for your home. We use natural cotton and jute for all our creations.',
    items: 41,
    rating: 4.8,
    reviews: 109,
    initials: 'KD',
    location: 'Austin, TX',
  },
];

export default function SellersPage() {
  return (
    <main className="bg-background min-h-screen">

      <div className="bg-primary py-12 px-6 text-center">
        <h1 className="font-playfair text-4xl font-bold text-secondary mb-3">
          Our Artisans
        </h1>

        <p className="text-secondary opacity-70 text-sm">
          Meet the talented creators behind our handcrafted products
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="bg-secondary rounded-xl p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h2 className="font-playfair text-2xl font-bold text-dark mb-2">
              Are you an artisan?
            </h2>

            <p className="text-gray-600 text-sm">
              Join our community and start selling your handcrafted items today
            </p>
          </div>

          <Link
            href="/register"
            className="bg-accent text-white px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity shrink-0"
          >
            Become a Seller
          </Link>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {sellers.map((seller) => (
            <div
              key={seller.id}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >

              <div className="flex items-center gap-4 mb-4">

                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-secondary font-bold text-lg">
                    {seller.initials}
                  </span>
                </div>

                <div>
                  <h3 className="font-playfair font-bold text-dark text-lg">
                    {seller.name}
                  </h3>

                  <p className="text-sm text-accent">
                    {seller.specialty}
                  </p>
                </div>

              </div>

              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                {seller.description}
              </p>

              <div className="flex items-center gap-1 text-sm text-gray-400 mb-4">
                <span>📍</span>
                <span>{seller.location}</span>
              </div>

              <div className="flex justify-between text-sm border-t border-gray-100 pt-4 mb-4">
                <span className="text-gray-400">
                  {seller.items} items
                </span>

                <span className="text-gray-400">
                  {seller.reviews} reviews
                </span>

                <span className="text-accent">
                  ⭐ {seller.rating}
                </span>
              </div>

              <Link
                href={`/sellers/${seller.id}`}
                className="block text-center bg-primary text-secondary text-sm px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                View Profile
              </Link>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}