// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact


import React, { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin, Sun, Moon } from "lucide-react";

export default function Contact() {
  const [dark, setDark] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Email (mailto)
    const mailBody = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = `mailto:spnazmul7@gmail.com?subject=Contact from Website&body=${mailBody}`;

    // WhatsApp
    window.open(
      `https://wa.me/971569675332?text=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`,
      "_blank"
    );
  };

  return (
    <section className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
        <div className="max-w-5xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                Best Point Printing UAE
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Professional printing solutions you can trust
              </p>
            </div>
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {dark ? <Sun /> : <Moon />}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-500" />
                <a href="mailto:spnazmul7@gmail.com" className="text-gray-700 dark:text-gray-200">
                  spnazmul7@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="text-green-500" />
                <a
                  href="https://wa.me/971569675332"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 dark:text-gray-200"
                >
                  WhatsApp: +971 56 967 5332
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-indigo-500" />
                <a href="tel:+971528089629" className="text-gray-700 dark:text-gray-200">
                  Call: +971 52 808 9629
                </a>
              </div>

              {/* Google Map */}
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-red-500" />
                  <span className="text-gray-700 dark:text-gray-200">UAE Location</span>
                </div>
                <iframe
                  title="map"
                  className="w-full h-48 rounded-xl"
                  loading="lazy"
                  src="https://www.google.com/maps?q=UAE&output=embed"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send via Email & WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
