import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ title, desc, tech, live, repo, img }) {
  return (
    <div className="bg-gray rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <a href={live} target="_blank" rel="noopener noreferrer">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover hover:scale-105 transition"
        />
      </a>
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-light mt-1">{desc}</p>

        <div className="flex flex-wrap gap-1 mt-3">
          {tech.map((t) => (
            <span key={t} className="text-xs bg-dark px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-4 text-sm">
          <a
            href={live}
            target="_blank"
            className="link flex items-center gap-1"
          >
            <FaExternalLinkAlt /> Live
          </a>
          <a
            href={repo}
            target="_blank"
            className="link flex items-center gap-1"
          >
            <FaGithub /> Repo
          </a>
        </div>
      </div>
    </div>
  );
}
