export default function WhyUs() {
  const reasons = [
    {
      title: "Full-Container Logistics",
      description:
        "We specialize in bulk shipments with real-time freight coordination across major ports.",
      icon: "🚚",
    },
    {
      title: "Transparent Documentation",
      description:
        "From Letter of Credit to Bill of Lading, our process is clean, compliant, and buyer-ready.",
      icon: "📄",
    },
    {
      title: "Live Shipment Tracking",
      description:
        "Stay informed with GPS-linked container updates and milestone alerts.",
      icon: "📍",
    },
    {
      title: "Dedicated Trade Liaison",
      description:
        "Get a single point of contact for all communication—from inquiry to delivery.",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Why Choose SM Exports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-start space-x-4 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl">{reason.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {reason.title}
                </h3>
                <p className="text-gray-600 mt-1 text-sm">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
