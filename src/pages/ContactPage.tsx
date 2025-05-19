import emailjs from 'emailjs-com';
import React, { useState } from 'react';

export default function ContactUs() {
  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_g9lquqn', 'template_jxuh4ym', e.target, 'Wc_bJJdvZwOvPLss4')
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true); // Show success modal
        },
        (error) => {
          console.log(error.text);
          setErrorModal(true); // Show error modal
        }
      );

    e.target.reset();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <form
        onSubmit={sendEmail}
        className="bg-white bg-opacity-10 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-full max-w-xl space-y-6 border border-white border-opacity-20"
      >
        <h2 className="text-4xl font-extrabold text-white text-center mb-4">✨ Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-5 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-5 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full px-5 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="w-full px-5 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
        ></textarea>

        <div className="text-center">
          <input
            type="submit"
            value="Send Message 🚀"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 transition duration-300 text-white font-bold rounded-xl shadow-md hover:shadow-cyan-500/40 cursor-pointer"
          />
        </div>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-sm text-center space-y-4 animate-fade-in-down">
            <h3 className="text-2xl font-bold text-green-600">🎉 Email Sent Successfully!</h3>
            <p className="text-gray-600">Your message was sent successfully. We'll get back to you shortly.</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {errorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-sm text-center space-y-4 animate-fade-in-down">
            <h3 className="text-2xl font-bold text-red-600">⚠️ Error!</h3>
            <p className="text-gray-600">Oops! Something went wrong. Please try again later.</p>
            <button
              onClick={() => setErrorModal(false)}
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
