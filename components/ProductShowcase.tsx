export default function ProductShowcase() {
  const products = [
    {
      name: "Sugar",
      image: "/products/sugar.jpg",
      description: "Premium ICUMSA 45 & 150. Monthly capacity: 2000 MT.",
      cta: "View Specs",
    },
    {
      name: "Onion",
      image: "/products/onion.jpg",
      description: "Fresh red & white onions. Bulk packaging & fast turnover.",
      cta: "View Specs",
    },
    {
      name: "Cashew",
      image: "/products/cashew.jpg",
      description:
        "W320 & W240 grades. Handpicked, vacuum-packed, export ready.",
      cta: "View Specs",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Our Export Commodities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="border rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <button className="mt-2 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-full">
                  {product.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
