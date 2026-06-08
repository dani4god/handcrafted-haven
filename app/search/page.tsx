import Link from "next/link";

const allProducts = [
  {
    id: 1,
    name: "Handmade Silver Ring",
    seller: "ArtisanCo",
    price: 24.99,
    rating: 4.8,
    category: "Jewelry",
  },
  {
    id: 2,
    name: "Ceramic Bowl Set",
    seller: "ClayWorks",
    price: 45.0,
    rating: 4.9,
    category: "Pottery",
  },
  {
    id: 3,
    name: "Woven Wall Hanging",
    seller: "TextileArt",
    price: 38.5,
    rating: 4.7,
    category: "Textiles",
  },
  {
    id: 4,
    name: "Oak Cutting Board",
    seller: "WoodCraft",
    price: 55.0,
    rating: 5.0,
    category: "Woodwork",
  },
  {
    id: 5,
    name: "Hand Painted Vase",
    seller: "PaintedClay",
    price: 32.0,
    rating: 4.6,
    category: "Pottery",
  },
  {
    id: 6,
    name: "Macrame Plant Hanger",
    seller: "KnotDesigns",
    price: 28.0,
    rating: 4.8,
    category: "Textiles",
  },
  {
    id: 7,
    name: "Gold Hoop Earrings",
    seller: "ArtisanCo",
    price: 18.99,
    rating: 4.7,
    category: "Jewelry",
  },
  {
    id: 8,
    name: "Scented Soy Candle",
    seller: "WaxWorks",
    price: 15.0,
    rating: 4.9,
    category: "Candles",
  },
  {
    id: 9,
    name: "Wooden Picture Frame",
    seller: "WoodCraft",
    price: 42.0,
    rating: 4.8,
    category: "Woodwork",
  },
];

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = params.q || "";

  const results = query
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.seller.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <main className="bg-background min-h-screen">
      <div className="bg-primary py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-3xl font-bold text-secondary mb-6">
            Search Products
          </h1>

          <form action="/search" method="GET">
            <div className="flex gap-3">
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search for handcrafted items..."
                className="flex-1 px-6 py-4 rounded-full text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />

              <button
                type="submit"
                className="bg-accent text-white px-8 py-4 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {query && (
          <p className="text-gray-500 text-sm mb-6">
            {results.length > 0
              ? `Found ${results.length} result${
                  results.length !== 1 ? "s" : ""
                } for "${query}"`
              : `No results found for "${query}"`}
          </p>
        )}

        {!query && (
          <div className="text-center py-16">
            <span className="text-6xl block mb-4">🔍</span>

            <h2 className="font-playfair text-2xl font-bold text-dark mb-3">
              Search for anything
            </h2>

            <p className="text-gray-400 text-sm">
              Try searching for a product name, category, or seller
            </p>
          </div>
        )}

        {query && results.length === 0 && (
          <div className="text-center py-16">
            <span className="text-6xl block mb-4">😔</span>

            <h2 className="font-playfair text-2xl font-bold text-dark mb-3">
              No results found
            </h2>

            <p className="text-gray-400 text-sm mb-6">
              Try a different search term or browse our categories
            </p>

            <Link
              href="/shop"
              className="bg-primary text-secondary px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Browse All Products
            </Link>
          </div>
        )}

        {results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-secondary h-48 flex items-center justify-center">
                  <span className="text-6xl">🧶</span>
                </div>

                <div className="p-4">
                  <span className="text-xs text-accent font-bold uppercase tracking-wider">
                    {product.category}
                  </span>

                  <h3 className="font-playfair font-bold text-dark text-lg mt-1 mb-1">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-400 mb-3">
                    by {product.seller}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-accent font-bold text-lg">
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
        )}
      </div>
    </main>
  );
}