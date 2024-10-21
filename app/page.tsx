import { ProductPreviewCard } from "./components/ProductPreviewCard";

const product = {
  title: "Gabrielle Essence Eau De Parfum",
  description: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  category: "perfume",
  img: {
    desktop: "/image-product-desktop.jpg",
    mobile: "/image-product-mobile.jpg"
  },
  price: 149.99,
  regularPrice: 169.99,
  discounted: true,
}

export default function Home() {
  return (
    <main className="min-h-full px-4 py-7 bg-primary-2 flex flex-col items-center justify-center">
      <ProductPreviewCard {...product} />
    </main>
  );
}
