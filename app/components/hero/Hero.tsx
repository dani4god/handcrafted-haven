import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-secondary py-20 px-6 text-center">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-dark mb-6">
        Discover Unique Handcrafted Treasures
      </h1>
      <p className="text-lg text-dark opacity-70 mb-8 max-w-2xl mx-auto">
        Support local artisans and find one-of-a-kind handmade items you'll
        love. Every purchase makes a difference.
      </p>
      <div className="flex gap-4 justify-center">
        <Link
          href="/shop"
          className="bg-accent text-white px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
        >
          Shop Now
        </Link>
        <Link
          href="/sellers"
          className="bg-primary text-white px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
        >
          Become a Seller
        </Link>
      </div>
    </section>
  );
}