import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real project you would POST to Formspree/Netlify/etc.
    alert("Thanks! I’ll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-12">
      <h2 className="section-title">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray p-6 rounded-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 bg-dark text-light rounded border border-gray-light focus:outline-none focus:border-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-3 bg-dark text-light rounded border border-gray-light focus:outline-none focus:border-white"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full p-3 bg-dark text-light rounded border border-gray-light focus:outline-none focus:border-white"
        />
        <button
          type="submit"
          className="w-full bg-gray-light text-dark py-3 rounded hover:bg-white transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
