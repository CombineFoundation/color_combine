import Image from "next/image";

export default function About() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-xl">
          <Image
            src="/farm4.jpeg"
            alt="Colors of Combine Farm House"
            fill
            priority
            className="object-cover object-center transform hover:scale-105 transition duration-700 ease-out rounded-xl"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-green-800/30 via-transparent to-green-500/20 rounded-3xl"></div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-8 text-center lg:text-left">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-green-900 leading-tight animate-fade-in">
            Experience <span className="text-green-700">Luxury </span>
            in the Heart of <span className="text-green-700">Nature</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-delay">
            In <span className="font-semibold text-green-800">2025</span>,{" "}
            <span className="font-semibold text-green-800">Colors of Combine Farm House</span>
            proudly delivered unforgettable experiences to a record number of guests.  
            With <span className="text-green-700 font-semibold">200% growth in efficiency</span>,
            our summer offers were enjoyed by countless families and friends, creating
            moments of pure joy and relaxation.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-delay">
            As we move forward, we remain dedicated to bringing even greater value,
            excitement, and memorable escapes for our customers. Colors of Combine is
            committed to innovation, comfort, and celebrations that go beyond expectations.
          </p>

          {/* Feature Glass Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-green-800 mb-2">🌿 Green Escape</h3>
              <p className="text-gray-600 text-sm">Reconnect with nature in a calm, lush environment.</p>
            </div>
            <div className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-green-800 mb-2">🏡 Elegant Villas</h3>
              <p className="text-gray-600 text-sm">Stay in luxurious villas designed for relaxation.</p>
            </div>
            <div className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-green-800 mb-2">🎉 Special Events</h3>
              <p className="text-gray-600 text-sm">Perfect destination for weddings & celebrations.</p>
            </div>
            <div className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-green-800 mb-2">🍴 BBQ & Dining</h3>
              <p className="text-gray-600 text-sm">Enjoy delightful meals with scenic views.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
