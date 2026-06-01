import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  category: string;
};

type Seller = {
  id: number;
  name: string;
  specialty: string;
  description: string;
  items: number;
  rating: number;
  reviews: number;
  initials: string;
  location: string;
  joined: string;
  products: Product[];
};

const sellers: Seller[] = [
  {
    id: 1,
    name: "ArtisanCo",
    specialty: "Handmade Jewelry",
    description:
      "We create beautiful handcrafted jewelry using ethically sourced materials. Each piece is unique and made with love and attention to detail. Our jewelry is inspired by nature and the beauty of the world around us.",
    items: 45,
    rating: 4.9,
    reviews: 128,
    initials: "AC",
    location: "Portland, OR",
    joined: "January 2024",
    products: [
      {
        id: 1,
        name: "Handmade Silver Ring",
        price: 24.99,
        rating: 4.8,
        category: "Jewelry",
      },
      {
        id: 7,
        name: "Gold Hoop Earrings",
        price: 18.99,
        rating: 4.7,
        category: "Jewelry",
      },
    ],
  },
  {
    id: 2,
    name: "ClayWorks",
    specialty: "Pottery & Ceramics",
    description:
      "Handthrown pottery and ceramics inspired by nature. Each piece is fired in our wood kiln for a unique finish. We use only natural clay and glazes in our work.",
    items: 32,
    rating: 4.8,
    reviews: 96,
    initials: "CW",
    location: "Santa Fe, NM",
    joined: "March 2024",
    products: [
      {
        id: 2,
        name: "Ceramic Bowl Set",
        price: 45.0,
        rating: 4.9,
        category: "Pottery",
      },
      {
        id: 5,
        name: "Hand Painted Vase",
        price: 32.0,
        rating: 4.6,
        category: "Pottery",
      },
    ],
  },
];

export default function SellerProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const seller = sellers.find(
    (s) => s.id === Number.parseInt(params.id, 10)
  );

  if (!seller) {
    return (
      <main className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-3xl font-bold text-dark mb-4">
            Seller Not Found
          </h1>

          <Link
            href="/sellers"
            className="bg-primary text-secondary px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Back to Sellers
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background min-h-screen">
      <div className="bg-primary py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center shrink-0">
            <span className="text-primary font-bold text-3xl">
              {seller.initials}
            </span>
          </div>

          <div className="text-center md:text-left">
            <h1 className="font-playfair text-4xl font-bold text-secondary mb-2">
              {seller.name}
            </h1>

            <p className="text-secondary opacity-70 text-sm mb-4">
              {seller.specialty}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-secondary text-sm">
              <span>📍 {seller.location}</span>
              <span>📅 Joined {seller.joined}</span>
              <span>⭐ {seller.rating} rating</span>
              <span>💬 {seller.reviews} reviews</span>
              <span>🛍️ {seller.items} items</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link
          href="/sellers"
          className="text-sm text-primary hover:text-accent transition-colors mb-8 inline-block"
        >
          ← Back to Sellers
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
              <h2 className="font-playfair text-xl font-bold text-dark mb-4">
                About
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                {seller.description}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="font-playfair text-xl font-bold text-dark mb-4">
                Shop Stats
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Items</span>
                  <span className="font-bold text-dark">{seller.items}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Reviews</span>
                  <span className="font-bold text-dark">{seller.reviews}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Average Rating</span>
                  <span className="font-bold text-accent">
                    ⭐ {seller.rating}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Member Since</span>
                  <span className="font-bold text-dark">{seller.joined}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <h2 className="font-playfair text-2xl font-bold text-dark mb-6">
              Products by {seller.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {seller.products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="bg-secondary h-40 flex items-center justify-center">
                    <span className="text-5xl">🧶</span>
                  </div>

                  <div className="p-4">
                    <span className="text-xs text-accent font-bold uppercase tracking-wider">
                      {product.category}
                    </span>

                    <h3 className="font-playfair font-bold text-dark text-lg mt-1 mb-3">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <span className="text-accent font-bold">
                        ${product.price.toFixed(2)}
                      </span>

                      <span className="text-sm text-gray-400">
                        ⭐ {product.rating}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}