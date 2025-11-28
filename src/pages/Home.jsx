import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Hi, I’m <span className="text-gray-light">Amit Kumar</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-light max-w-2xl mx-auto mb-8">
        Full-Stack Developer passionate about building real-time, scalable web
        applications with the MERN stack.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/projects"
          className="bg-gray-light text-dark px-6 py-3 rounded hover:bg-white transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="border border-gray-light px-6 py-3 rounded hover:bg-gray-light hover:text-dark transition"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
