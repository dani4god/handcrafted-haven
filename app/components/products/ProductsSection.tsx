import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Handmade Silver Ring', seller: 'ArtisanCo', price: 24.99, rating: 4.8, category: 'Jewelry' },
  { id: 2, name: 'Ceramic Bowl Set', seller: 'ClayWorks', price: 45.00, rating: 4.9, category: 'Pottery' },
  { id: 3, name: 'Woven Wall Hanging', seller: 'TextileArt', price: 38.50, rating: 4.7, category: 'Textiles' },
  { id: 4, name: 'Oak Cutting Board', seller: 'WoodCraft', price: 55.00, rating: 5.0, category: 'Woodwork' },
  { id: 5, name: 'Hand Painted Vase', seller: 'PaintedClay', price: 32.00, rating: 4.6, category: 'Pottery' },
  { id: 6, name: 'Macrame Plant Hanger', seller: 'KnotDesigns', price: 28.00, rating: 4.8, category: 'Textiles' },
];

export default function ProductsSection() {
  return (
    <section className="py-16 px-6 bg-background">
      <h2 className="font-playfair text-3xl font-bold text-dark text-center mb-4">
        Featured Products
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Handpicked items from our talented artisans
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}