import Link from "next/link";
export default function Home() {
  return (
    <main className="p-4 sm:p-24 mx-auto max-w-7xl min-w-full">
      <h1>Bento Box Grid Prototypes</h1>
      <ol>
        <li className="py-4">
          <Link href={"/v1"} className="underline">
            Verson 1
          </Link>
        </li>
        <li className="py-4">
          <Link href={"/v2"} className="underline">
            Verson 2
          </Link>
        </li>
        <li className="py-4">
          <Link href={"/v3"} className="underline">
            Verson 3
          </Link>
        </li>
        <li className="py-4">
          <Link href={"/v4"} className="underline">
            Verson 4
          </Link>
        </li>
      </ol>
    </main>
  );
}

function WideCollectionCard() {
  return (
    <div className="bg-red-500 col-span-2 row-span-4 sm:col-span-3 min-w-fit"></div>
  );
}

function ProductCard() {
  return (
    <div className="bg-green-500 col-span-1 sm:col-span-2 row-span-4"></div>
  );
}

function CategoryCard() {
  return (
    <div className="bg-blue-500 col-span-1 sm:col-span-2 row-span-2"></div>
  );
}

function TallCollectionCard() {
  return (
    <div className="bg-purple-500 col-span-1 sm:col-span-2 row-span-4"></div>
  );
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
