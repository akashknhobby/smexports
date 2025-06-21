import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/bg2.jpg')",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent z-0" />

      {/* Hero Content */}
      <div className="relative z-10 text-white text-center px-6 md:px-0">
        <div className="flex flex-col items-center space-y-6 max-w-2xl mx-auto">
          <Image
            src="/logo.jpg"
            alt="SM Exports Logo"
            width={125}
            height={125}
            className="drop-shadow-xl"
            priority
          />

          <h1 className="text-4xl md:text-6xl font-black tracking-wide leading-tight drop-shadow-md">
            SM EXPORTS
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-xl drop-shadow-sm">
            Global-scale exports of premium Sugar, Onion, and Cashew. Speed.
            Scale. Integrity.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full shadow-md transition duration-200">
              Request Quote
            </button>
            <button className="bg-transparent border border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-full transition duration-200">
              View Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
