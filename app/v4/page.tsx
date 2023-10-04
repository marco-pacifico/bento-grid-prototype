import Link from "next/link";
import Image from "next/image";
import collectionimage from "/public/collection.webp";
import productimage from "/public/product.webp";

export default function Home() {
  return (
    <main className="p-4 sm:p-24 mx-auto max-w-7xl sm:min-w-[800px]">
      <Link href={"/"} className="underline">
        Back
      </Link>
      <h1>V3</h1>
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="grid grid-cols-2 gap-4 auto-rows-auto flex-1">
          {CARDS.map((Component, index) => (
            <Component key={index} />
          ))}
        </div>
        {/* hidden sm:grid */}
        <div className="grid grid-cols-2 gap-4 auto-rows-auto flex-1">
          {CARDS2.map((Component, index) => (
            <Component key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

function CardContent({ isCollection = true }: { isCollection?: boolean }) {
  const content = isCollection
    ? {
        name: "Collection name",
        description: "Collection description",
        image: collectionimage,
      }
    : {
        name: "Product name",
        description: "$99",
        image: productimage,
      };

  return (
    <>
      <Image
        src={content.image}
        alt="Image"
        className="h-full w-full object-cover object-center overflow-hidden"
      ></Image>
      <div className="p-3">
        <h2 className="text-sm font-semibold">{content.name}</h2>
        <p className="text-sm">{content.description}</p>
      </div>
    </>
  );
}

function CardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-gray-100 min-w-fit flex flex-col rounded-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

function WideCollectionCard() {
  return (
    <CardContainer className="col-span-2 row-span-5 aspect-[5/3]">
      <CardContent />
    </CardContainer>
  );
}

function ProductCard() {
  return (
    <CardContainer className="col-span-1 row-span-6">
      <CardContent isCollection={false} />
    </CardContainer>
  );
}

function CategoryCard() {
  return (
    <div className="bg-blue-500 col-span-1 row-span-3 rounded-lg min-h-[128px] lg:min-h-[224px]">
      <h2 className="text-sm font-semibold p-4 text-white">Category</h2>
    </div>
  );
}

function TallCollectionCard() {
  return (
    <CardContainer className="col-span-1 sm:col-span-1 row-span-6">
      <CardContent />
    </CardContainer>
  );
}

// const CARDS = [
//   WideCollectionCard,
//   TallCollectionCard,
//   CategoryCard,
//   ProductCard,
//   ProductCard,
//   TallCollectionCard,
//   CategoryCard,
// ];

const CARDS = [
  WideCollectionCard,
  TallCollectionCard,
  CategoryCard,
  ProductCard,
  ProductCard,
  TallCollectionCard,
  CategoryCard,
];
const CARDS2 = [
  CategoryCard,
  ProductCard,
  ProductCard,
  TallCollectionCard,
  TallCollectionCard,
  CategoryCard,
  WideCollectionCard,
];