import Link from "next/link";

const stats = [
  { label: "Total Products", value: "12", emoji: "🛍️" },
  { label: "Total Sales", value: "48", emoji: "💰" },
  { label: "Average Rating", value: "4.8", emoji: "⭐" },
  { label: "Total Reviews", value: "36", emoji: "💬" },
];

const recentOrders = [
  {
    id: 1,
    product: "Handmade Silver Ring",
    buyer: "Sarah M.",
    date: "Jun 1, 2026",
    status: "Delivered",
    amount: 24.99,
  },
  {
    id: 2,
    product: "Gold Hoop Earrings",
    buyer: "John D.",
    date: "May 28, 2026",
    status: "Processing",
    amount: 18.99,
  },
  {
    id: 3,
    product: "Handmade Silver Ring",
    buyer: "Emma L.",
    date: "May 25, 2026",
    status: "Shipped",
    amount: 24.99,
  },
  {
    id: 4,
    product: "Gold Hoop Earrings",
    buyer: "Mike R.",
    date: "May 20, 2026",
    status: "Delivered",
    amount: 18.99,
  },
];

const myProducts = [
  {
    id: 1,
    name: "Handmade Silver Ring",
    price: 24.99,
    rating: 4.8,
    stock: 5,
    category: "Jewelry",
  },
  {
    id: 7,
    name: "Gold Hoop Earrings",
    price: 18.99,
    rating: 4.7,
    stock: 8,
    category: "Jewelry",
  },
];

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Delivered: "bg-green-100 text-green-700",
    Processing: "bg-yellow-100 text-yellow-700",
    Shipped: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`text-xs font-bold px-3 py-1 rounded-full ${
        colors[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}

export default function DashboardPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="bg-primary py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-playfair text-3xl font-bold text-secondary mb-1">
            Seller Dashboard
          </h1>
          <p className="text-secondary opacity-70 text-sm">
            Welcome back, ArtisanCo!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-4xl block mb-3">{stat.emoji}</span>
              <p className="font-playfair text-3xl font-bold text-dark mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Recent Orders */}
          <div className="md:col-span-2">
            <h2 className="font-playfair text-2xl font-bold text-dark mb-4">
              Recent Orders
            </h2>

            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left px-4 py-3">Product</th>
                    <th className="text-left px-4 py-3">Buyer</th>
                    <th className="text-left px-4 py-3">Date</th>
                    <th className="text-left px-4 py-3">Status</th>
                    <th className="text-right px-4 py-3">Amount</th>
                  </tr>
                </thead>

                <tbody>
                  {recentOrders.map((order, i) => (
                    <tr
                      key={order.id}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3">{order.product}</td>
                      <td className="px-4 py-3 text-gray-500">
                        {order.buyer}
                      </td>
                      <td className="px-4 py-3 text-gray-500">
                        {order.date}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={order.status} />
                      </td>
                      <td className="px-4 py-3 text-right text-accent font-bold">
                        ${order.amount.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="font-playfair text-2xl font-bold text-dark mb-4">
              Quick Actions
            </h2>

            <div className="space-y-3">
              <Link
                href="/dashboard/products/new"
                className="flex items-center gap-3 bg-primary text-secondary px-6 py-4 rounded-xl hover:opacity-90 transition-opacity"
              >
                <span className="text-2xl">➕</span>
                <span className="font-bold text-sm">Add New Product</span>
              </Link>

              <Link
                href="/dashboard/products"
                className="flex items-center gap-3 bg-white border border-gray-100 text-dark px-6 py-4 rounded-xl hover:shadow-md transition-shadow"
              >
                <span className="text-2xl">📦</span>
                <span className="font-bold text-sm">Manage Products</span>
              </Link>

              <Link
                href="/sellers/1"
                className="flex items-center gap-3 bg-white border border-gray-100 text-dark px-6 py-4 rounded-xl hover:shadow-md transition-shadow"
              >
                <span className="text-2xl">👤</span>
                <span className="font-bold text-sm">View My Profile</span>
              </Link>

              <Link
                href="/dashboard/settings"
                className="flex items-center gap-3 bg-white border border-gray-100 text-dark px-6 py-4 rounded-xl hover:shadow-md transition-shadow"
              >
                <span className="text-2xl">⚙️</span>
                <span className="font-bold text-sm">Account Settings</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Products */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-playfair text-2xl font-bold text-dark">
              My Products
            </h2>

            <Link
              href="/dashboard/products/new"
              className="bg-accent text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
            >
              + Add Product
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {myProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-secondary h-40 flex items-center justify-center">
                  <span className="text-5xl">🧶</span>
                </div>

                <div className="p-4">
                  <span className="text-xs text-accent font-bold uppercase tracking-wider">
                    {product.category}
                  </span>

                  <h3 className="font-playfair font-bold text-dark text-lg mt-1 mb-1">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-accent font-bold">
                      ${product.price.toFixed(2)}
                    </span>

                    <span className="text-sm text-gray-400">
                      ⭐ {product.rating}
                    </span>
                  </div>

                  <div className="mb-4 text-sm text-gray-400">
                    Stock: {product.stock} left
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={`/dashboard/products/${product.id}/edit`}
                      className="flex-1 text-center bg-primary text-secondary py-2 rounded-full text-xs font-bold hover:opacity-90 transition-opacity"
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      className="flex-1 border border-red-200 text-red-400 py-2 rounded-full text-xs font-bold hover:bg-red-50 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}


