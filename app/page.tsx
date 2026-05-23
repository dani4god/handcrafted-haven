import Hero from './components/hero/Hero';
import CategoriesSection from './components/categories/CategoriesSection';
import ProductsSection from './components/products/ProductsSection';
import FeaturedSellers from './components/sellers/FeaturedSellers';

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoriesSection />
      <ProductsSection />
      <FeaturedSellers />
    </main>
  );
}