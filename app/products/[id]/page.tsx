import Link from "next/link";

type Review = {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
};

type Product = {
  id: number;
  name: string;
  seller: string;
  price: number;
  rating: number;
  category: string;
  description: string;
  reviews: Review[];
};

const products: Product[] = [
  {
    id: 1,
    name: "Handmade Silver Ring",
    seller: "ArtisanCo",
    price: 24.99,
    rating: 4.8,
    category: "Jewelry",
    description:
      "A beautiful handcrafted silver ring made from ethically sourced materials.",
    reviews: [
      {
        id: 1,
        author: "Sarah M.",
        rating: 5,
        comment: "Absolutely beautiful ring!",
        date: "May 1, 2026",
      },
    ],
  },
  {
    id: 2,
    name: "Ceramic Bowl Set",
    seller: "ClayWorks",
    price: 45,
    rating: 4.9,
    category: "Pottery",
    description:
      "A set of 4 handthrown ceramic bowls inspired by nature.",
    reviews: [
      {
        id: 1,
        author: "Mike R.",
        rating: 5,
        comment: "These bowls are stunning.",
        date: "May 5, 2026",
      },
    ],
  },
];

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find(
    (p) => p.id === Number.parseInt(params.id, 10)
  );

  if (!product) {
    return (
      <main className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-3xl font-bold text-dark mb-4">
            Product Not Found
          </h1>

          <Link
            href="/shop"
            className="bg-primary text-secondary px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <Link
          href="/shop"
          className="text-sm text-primary hover:text-accent transition-colors mb-8 inline-block"
        >
          ← Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-secondary rounded-xl h-96 flex items-center justify-center">
            <span className="text-8xl">🧶</span>
          </div>

          <div>
            <span className="text-sm text-accent font-bold uppercase tracking-wider">
              {product.category}
            </span>

            <h1 className="font-playfair text-4xl font-bold text-dark mt-2 mb-3">
              {product.name}
            </h1>

            <Link
              href={`/sellers/1`}
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              by {product.seller}
            </Link>

            <div className="flex items-center gap-2 mt-4 mb-6">
              <span className="text-accent">⭐</span>
              <span className="font-bold text-dark">{product.rating}</span>
              <span className="text-gray-400 text-sm">
                ({product.reviews.length} reviews)
              </span>
            </div>

            <p className="text-3xl font-bold text-accent mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex gap-4">
              <button className="flex-1 bg-primary text-secondary py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
                Add to Cart
              </button>

              <button className="border border-primary text-primary px-6 py-3 rounded-full text-sm font-bold hover:bg-primary hover:text-secondary transition-colors">
                ♡ Save
              </button>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-playfair text-2xl font-bold text-dark mb-6">
            Customer Reviews
          </h2>

          <div className="space-y-4">
            {product.reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl border border-gray-100 p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-secondary text-sm font-bold">
                        {review.author[0]}
                      </span>
                    </div>

                    <div>
                      <p className="font-bold text-dark text-sm">
                        {review.author}
                      </p>

                      <p className="text-gray-400 text-xs">
                        {review.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="text-accent text-sm">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="font-playfair text-xl font-bold text-dark mb-4">
              Write a Review
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-dark mb-2">
                  Rating
                </label>

                <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-dark focus:outline-none focus:border-primary">
                  <option>⭐⭐⭐⭐⭐ 5 Stars</option>
                  <option>⭐⭐⭐⭐ 4 Stars</option>
                  <option>⭐⭐⭐ 3 Stars</option>
                  <option>⭐⭐ 2 Stars</option>
                  <option>⭐ 1 Star</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-dark mb-2">
                  Your Review
                </label>

                <textarea
                  rows={4}
                  placeholder="Share your experience with this product..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-dark focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <button className="bg-primary text-secondary px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
                Submit Review
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}