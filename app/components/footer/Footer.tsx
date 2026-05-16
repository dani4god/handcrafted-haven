import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-secondary py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="font-playfair text-xl font-bold mb-4">
            Handcrafted Haven
          </h3>
          <p className="text-sm opacity-70 leading-relaxed">
            A marketplace connecting talented artisans with customers who
            appreciate the beauty of handmade products.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">
            Shop
          </h4>
          <ul className="space-y-2">
            <li><Link href="/shop" className="text-sm opacity-70 hover:opacity-100 transition-opacity">All Products</Link></li>
            <li><Link href="/shop?category=jewelry" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Jewelry</Link></li>
            <li><Link href="/shop?category=pottery" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Pottery</Link></li>
            <li><Link href="/shop?category=textiles" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Textiles</Link></li>
            <li><Link href="/shop?category=woodwork" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Woodwork</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">
            Sellers
          </h4>
          <ul className="space-y-2">
            <li><Link href="/sellers" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Browse Sellers</Link></li>
            <li><Link href="/register" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Become a Seller</Link></li>
            <li><Link href="/sellers/dashboard" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Seller Dashboard</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><Link href="/contact" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Contact</Link></li>
            <li><Link href="/privacy" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-50">
          © 2026 Handcrafted Haven. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Facebook</Link>
          <Link href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Instagram</Link>
          <Link href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Twitter</Link>
        </div>
      </div>
    </footer>
  );
}