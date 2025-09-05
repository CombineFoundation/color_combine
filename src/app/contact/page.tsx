"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg">We’re available 24/7 — Reach out anytime!</p>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-6 lg:px-16 py-12 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            Have a question about bookings, events, or want to know more? Contact us anytime.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="text-green-700" />
              <span className="text-gray-700">+92 319 3372277</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-green-700" />
              <span className="text-gray-700">+92 318 3384794</span>
            </div>
            <a
              href="mailto:info@combinefarmhouse.com"
              className="flex items-center space-x-3 hover:text-green-700 transition"
            >
              <Mail className="text-green-700" />
              <span className="text-gray-700">info@combinefarmhouse.com</span>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Colors+of+Combine,+Haji+Abdul+Kareem+Goth,+near+Baqai+Cadet+College,+Karachi,+75340,+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-green-700 transition"
            >
              <MapPin className="text-green-700" />
              <span className="text-gray-700">
                Colors of Combine, Haji Abdul Kareem Goth, near Baqai Cadet College, Karachi, 75340, Pakistan
              </span>
            </a>
            <div className="flex items-center space-x-3">
              <Clock className="text-green-700" />
              <span className="text-gray-700">Available 24/7</span>
            </div>
          </div>

          <a
            href="https://wa.me/923193372277"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition"
             >
            Chat on WhatsApp
        </a>
        </div>

        {/* Placeholder for layout balance */}
        <div className="hidden lg:block"></div>
      </div>

      {/* Embedded Google Map */}
     {/* Map Section */}
<div className="w-full h-96 rounded-xl overflow-hidden shadow-lg mt-8">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2857.594381759784!2d67.24350997414692!3d25.015758539028134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb349c7a0736a27%3A0x7843ae513c5c7feb!2sColors%20of%20Combine%20Farmhouse!5e1!3m2!1sen!2s!4v1756796352049!5m2!1sen!2s"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

    </div>
  );
}
