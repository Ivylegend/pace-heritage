import Image from "next/image";

const productSections = [
  {
    title: "Retail Ice Cream",
    darkHeader: true,
    products: [
      {
        name: "PACEHERITAGE",
        desc: "Ice Cream",
        image: "/images/ice-cream.png",
      },
      {
        name: "VENEZIA",
        desc: "One Pint Gourmet Ice Cream",
        image: "/images/gourmet.png",
      },
      { name: "VENEZIA", desc: "Italian Gelato", image: "/images/gelato.png" },
    ],
  },
  {
    title: "Manufacturing Ingredients",
    products: [
      {
        name: "COMPRITAL",
        desc: "Soft Ice Cream Premix",
        image: "/images/product-dry-mix.png",
      },
      { name: "PACE", desc: "Ice Cream Cones", image: "/images/product-cone.png" },
    ],
  },
];

export default function ProductCardsSection() {
  return (
    <section className="w-full bg-gray-100 px-4 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        {productSections.map((section) => (
          <div
            key={section.title}
            className="overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            <div
              className={`px-6 py-6 text-center ${
                section.darkHeader
                  ? "bg-[#021025] text-white"
                  : "bg-white text-[#021025]"
              }`}
            >
              <h2 className="text-xl font-bold md:text-2xl">{section.title}</h2>
            </div>

            <div
              className={`grid gap-6 px-6 pb-8 pt-6 ${
                section.products.length === 3
                  ? "grid-cols-1 sm:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2"
              }`}
            >
              {section.products.map((product) => (
                <div
                  key={product.name + product.desc}
                  className="text-center sm:text-left"
                >
                  <div className="mb-5 flex h-40 items-center justify-center">
                    <Image
                      width={500}
                      height={500}
                      src={product.image}
                      alt={product.name}
                      className="max-h-full object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-[#021025]">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-base leading-snug text-[#021025]/80">
                    {product.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
