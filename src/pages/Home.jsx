import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="py-28 text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Soft Background Glow Effect */}
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_50%_20%,#7dd3fc,transparent_60%)]"></div>

      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fadeIn">
        Hi, I’m <span className="text-blue-300">AMIT</span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 animate-fadeIn delay-150">
        Full-Stack Developer passionate about building real-time, scalable web
        applications with the MERN stack.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-5 animate-fadeIn delay-300">
        <Link
          to="/projects"
          className="px-7 py-3 rounded-lg bg-blue-300 text-gray-900 font-semibold shadow-lg hover:bg-blue-200 hover:scale-105 transition-all"
        >
          View Projects
        </Link>

        <Link
          to="/contact"
          className="px-7 py-3 rounded-lg border border-blue-300 text-blue-300 font-semibold hover:bg-blue-300 hover:text-gray-900 hover:scale-105 transition-all"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
