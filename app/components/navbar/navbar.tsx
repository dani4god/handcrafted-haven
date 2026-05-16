import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary text-secondary px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-playfair font-bold">
        Handcrafted Haven
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/shop" className="text-sm hover:text-accent transition-colors">
          Shop
        </Link>
        <Link href="/sellers" className="text-sm hover:text-accent transition-colors">
          Sellers
        </Link>
        <Link href="/about" className="text-sm hover:text-accent transition-colors">
          About
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-sm border border-secondary px-4 py-2 rounded-full hover:bg-secondary hover:text-primary transition-colors"
        >
          Log in
        </Link>
        <Link
          href="/register"
          className="text-sm bg-accent px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}