import Link from 'next/link';
import ProductCard from '../components/products/ProductCard';

const products = [
  { id: 1, name: 'Handmade Silver Ring', seller: 'ArtisanCo', price: 24.99, rating: 4.8, category: 'Jewelry' },
  { id: 2, name: 'Ceramic Bowl Set', seller: 'ClayWorks', price: 45.00, rating: 4.9, category: 'Pottery' },
  { id: 3, name: 'Woven Wall Hanging', seller: 'TextileArt', price: 38.50, rating: 4.7, category: 'Textiles' },
  { id: 4, name: 'Oak Cutting Board', seller: 'WoodCraft', price: 55.00, rating: 5.0, category: 'Woodwork' },
  { id: 5, name: 'Hand Painted Vase', seller: 'PaintedClay', price: 32.00, rating: 4.6, category: 'Pottery' },
  { id: 6, name: 'Macrame Plant Hanger', seller: 'KnotDesigns', price: 28.00, rating: 4.8, category: 'Textiles' },
  { id: 7, name: 'Gold Hoop Earrings', seller: 'ArtisanCo', price: 18.99, rating: 4.7, category: 'Jewelry' },
  { id: 8, name: 'Scented Soy Candle', seller: 'WaxWorks', price: 15.00, rating: 4.9, category: 'Candles' },
  { id: 9, name: 'Wooden Picture Frame', seller: 'WoodCraft', price: 42.00, rating: 4.8, category: 'Woodwork' },
];

const categories = [
  'All',
  'Jewelry',
  'Pottery',
  'Textiles',
  'Woodwork',
  'Paintings',
  'Candles',
];

export default function ShopPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="bg-primary py-12 px-6 text-center">
        <h1 className="font-playfair text-4xl font-bold text-secondary mb-3">
          Shop All Products
        </h1>

        <p className="text-secondary opacity-70 text-sm">
          Discover unique handcrafted items from our talented artisans
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row gap-8">

          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-xl border border-gray-100 p-6">

              <h2 className="font-playfair font-bold text-dark text-lg mb-4">
                Categories
              </h2>

              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <Link
                      href={`/shop?category=${category.toLowerCase()}`}
                      className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>

              <hr className="my-6 border-gray-100" />

              <h2 className="font-playfair font-bold text-dark text-lg mb-4">
                Price Range
              </h2>

              <div className="space-y-2">
                {['Under $25', '$25 - $50', '$50 - $100', 'Over $100'].map((range) => (
                  <label
                    key={range}
                    className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
                  >
                    <input type="checkbox" className="accent-primary" />
                    {range}
                  </label>
                ))}
              </div>

              <hr className="my-6 border-gray-100" />

              <h2 className="font-playfair font-bold text-dark text-lg mb-4">
                Rating
              </h2>

              <div className="space-y-2">
                {['5 Stars', '4 Stars & up', '3 Stars & up'].map((rating) => (
                  <label
                    key={rating}
                    className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
                  >
                    <input type="checkbox" className="accent-primary" />
                    {rating}
                  </label>
                ))}
              </div>

            </div>
          </aside>

          <div className="flex-1">

            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                {products.length} products found
              </p>

              <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-600">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}