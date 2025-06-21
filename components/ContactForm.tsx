export default function ContactForm() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Start a Trade Inquiry
        </h2>
        <form className="bg-white p-8 rounded-2xl shadow-md space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full"
            />
          </div>
          <textarea
            placeholder="Your Message / Inquiry Details"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full h-32"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg shadow-md transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
