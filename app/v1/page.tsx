import Link from "next/link";
export default function Home() {
  return (
    <main className="p-4 sm:p-24 mx-auto max-w-7xl min-w-full">
        <Link href={"/"} className="underline">Back</Link>
      <h1>V1</h1>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 auto-rows-[32px] [&>*:nth-of-type(2)]:hidden sm:[&>*:nth-of-type(2)]:block">
        {CARDS.map((Component, index) => (
          <Component key={index} />
        ))}
      </div>
    </main>
  );
}

function WideCollectionCard() {
  return <div className="bg-red-500 col-span-2 row-span-4 sm:col-span-3 min-w-fit"></div>;
}

function ProductCard() {
  return <div className="bg-green-500 col-span-1 sm:col-span-2 row-span-4"></div>;
}

function CategoryCard() {
  return <div className="bg-blue-500 col-span-1 sm:col-span-2 row-span-2"></div>;
}

function TallCollectionCard() {
  return <div className="bg-purple-500 col-span-1 sm:col-span-2 row-span-4"></div>;
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

