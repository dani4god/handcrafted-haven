import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  seller: string;
  price: number;
  rating: number;
  category: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-secondary h-48 flex items-center justify-center">
        <span className="text-primary text-5xl">🧶</span>
      </div>
      <div className="p-4">
        <h3 className="font-playfair text-dark font-bold text-lg mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3">by {product.seller}</p>
        <div className="flex items-center justify-between">
          <span className="text-accent font-bold text-lg">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500 flex items-center gap-1">
            ⭐ {product.rating}
          </span>
        </div>
        <Link
          href={`/products/${product.id}`}
          className="mt-4 block text-center bg-primary text-secondary text-sm px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}