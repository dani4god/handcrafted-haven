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
      "We create beautiful handcrafted jewelry using ethically sourced materials.",
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
      "Handthrown pottery and ceramics inspired by nature.",
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
        price: 45,
        rating: 4.9,
        category: "Pottery",
      },
      {
        id: 5,
        name: "Hand Painted Vase",
        price: 32,
        rating: 4.6,
        category: "Pottery",
      },
    ],
  },
];

export default async function SellerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const seller = sellers.find(
    (s) => s.id === Number(id)
  );

  if (!seller) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Seller Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-8">
        <Link
          href="/sellers"
          className="text-primary hover:underline"
        >
          ← Back to Sellers
        </Link>

        <div className="mt-8">
          <h1 className="text-4xl font-bold">
            {seller.name}
          </h1>

          <p className="mt-2 text-gray-600">
            {seller.specialty}
          </p>

          <p className="mt-6">
            {seller.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {seller.products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="border rounded-lg p-4 hover:shadow-md"
              >
                <h3 className="font-bold">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {product.category}
                </p>

                <p className="mt-2 font-semibold">
                  ${product.price.toFixed(2)}
                </p>

                <p>⭐ {product.rating}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}