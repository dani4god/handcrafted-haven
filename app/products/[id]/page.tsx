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
      "A set of handcrafted ceramic bowls inspired by nature.",
    reviews: [
      {
        id: 1,
        author: "Mike R.",
        rating: 5,
        comment: "Amazing quality!",
        date: "May 5, 2026",
      },
    ],
  },
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-8">
        <Link
          href="/shop"
          className="text-primary hover:underline"
        >
          ← Back to Shop
        </Link>

        <div className="mt-8">
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="text-gray-500 mt-2">
            by {product.seller}
          </p>

          <p className="mt-4 text-2xl font-bold">
            ${product.price.toFixed(2)}
          </p>

          <p className="mt-6">
            {product.description}
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">
              Reviews
            </h2>

            {product.reviews.map((review) => (
              <div
                key={review.id}
                className="border rounded-lg p-4 mb-4"
              >
                <div className="flex justify-between">
                  <strong>{review.author}</strong>
                  <span>⭐ {review.rating}</span>
                </div>

                <p className="mt-2">
                  {review.comment}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  {review.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}