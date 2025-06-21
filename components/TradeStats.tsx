export default function TradeStats() {
  const stats = [
    {
      label: "Countries Served",
      value: "50+",
      icon: "🌍",
    },
    {
      label: "Monthly Capacity",
      value: "50000+ MT",
      icon: "📦",
    },
    {
      label: "Turnaround Time",
      value: "< 10 Days",
      icon: "⏱️",
    },
    {
      label: "Certification",
      value: "IEC",
      icon: "📃",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Trade at Scale
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl shadow-sm p-6"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800">
                {stat.value}
              </div>
              <p className="text-gray-600 mt-1 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
