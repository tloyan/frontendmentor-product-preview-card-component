import Image from "next/image";
import iconCart from "@/public/icon-cart.svg";

export function ProductPreviewCard({
  title,
  category,
  description,
  img,
  price,
  regularPrice,
  discounted,
}: {
  title: string;
  description: string;
  category: string;
  img: { desktop: string; mobile: string };
  price: number;
  regularPrice: number;
  discounted: boolean;
}) {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-[10px] bg-white sm:max-w-[600px] sm:flex-row">
      <div className="w-full sm:w-1/2">
        <Image
          src={img.mobile}
          alt={"image product"}
          className="sm:hidden"
          width={686}
          height={480}
        />
        <Image
          src={img.desktop}
          alt={"image product"}
          width={600}
          height={900}
          className="hidden sm:block"
        />
      </div>
      <div className="p-6 sm:w-1/2 sm:p-8">
        <p className="leading text-xs uppercase tracking-[.417em]">
          {category}
        </p>
        <p className="mt-3 font-serif text-[2rem] font-bold leading-8 text-neutral-1 sm:mt-5">
          {title}
        </p>
        <p className="mt-5 leading-[1.643em] sm:mt-6">{description}</p>
        <div className="mt-5 flex w-full items-center space-x-5 sm:mt-7">
          <p className="font-serif text-[2rem] font-bold leading-8 text-primary-1">
            ${price}
          </p>
          {discounted && (
            <p className="text-[0.813rem] leading-[1.769em] line-through">
              ${regularPrice}
            </p>
          )}
        </div>
        <button className="mt-5 flex w-full items-center justify-center space-x-3 rounded-lg bg-primary-1 py-[14px] font-bold text-white hover:bg-primary-3 sm:mt-7">
          <Image src={iconCart} alt="icon cart" />
          <p>Add to Cart</p>
        </button>
      </div>
    </article>
  );
}
