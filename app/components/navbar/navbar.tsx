'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

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
        <form action="/search" method="GET">
          <input
            type="text"
            name="q"
            placeholder="Search..."
            className="bg-white bg-opacity-20 text-secondary placeholder-secondary placeholder-opacity-70 px-4 py-2 rounded-full text-sm focus:outline-none focus:bg-opacity-30 w-36"
          />
        </form>

        {session ? (
          <>
            <Link
              href="/dashboard"
              className="text-sm border border-secondary px-4 py-2 rounded-full hover:bg-secondary hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="text-sm bg-accent px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Log out
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
}