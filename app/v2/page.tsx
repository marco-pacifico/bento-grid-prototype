import Image from "next/image";
import productimage from "./productimage.webp"
import Link from "next/link";

export default function Home() {
    return (
      <main className="p-4 sm:p-24 mx-auto max-w-7xl min-w-full">
        <Link href={"/"} className="underline">Back</Link>
        <h1>V2</h1>
        <div className="grid grid-cols-3 gap-4">
          {CARDS.map((Component, index) => (
            <Component key={index} />
          ))}
        </div>
      </main>
    );
  }
  
  function WideCollectionCard() {
    return <div className="bg-red-500 rounded-lg overflow-hidden col-span-3 aspect-[5/3]">
        <Image src={productimage} alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center"></Image>
    </div>;
  }
  
  function ProductCard() {
    return <div className="bg-green-500 aspect-[2/3]">
                <Image src={productimage} alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center"></Image>

    </div>;
  }
  
  function CategoryCard() {
    return <div className="bg-blue-500 p-4">
        <h2>Category</h2>
    </div>;
  }
  
  function TallCollectionCard() {
    return <div className="bg-purple-500 aspect-[2/3]"></div>;
  }
  
  const CARDS = [
    WideCollectionCard,
    WideCollectionCard,
    ProductCard,
    CategoryCard,
    TallCollectionCard,
    TallCollectionCard,
    TallCollectionCard,
    ProductCard,
    CategoryCard,
  
  ];
  
  