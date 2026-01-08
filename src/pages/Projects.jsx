import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Mern Grocery Application (for User)",
    desc: "Developed a MERN-based grocery store application with user authentication, cart and order management, Cloudinary image uploads, and a fully responsive UI using React and Tailwind CSS.",
    tech: [
      "React",
      "Node.js",
      "Tailwindcss",
      "MongoDB",
      "Cloudinary",
      "Zustand",
    ],
    live: "https://rushbasket-grocery-websites-frontend.onrender.com/",
    repo: "https://github.com/amitku26/RushBasket-Grocery-websites-",
    img: "/images/homee.png",
  },

  {
    title: "Mern Grocery Application (for admin)",
    desc: "Developed a MERN-based grocery store application with user authentication, cart and order management, Cloudinary image uploads, and a fully responsive UI using React and Tailwind CSS.",
    tech: [
      "React",
      "Node.js",
      "Tailwindcss",
      "MongoDB",
      "Cloudinary",
      "Zustand",
    ],
    live: "https://rushbasket-grocery-websites-admin.onrender.com/",
    repo: "https://github.com/amitku26/RushBasket-Grocery-websites-",
    img: "/images/admin.png",
  },

  {
    title: "Instagram Clone",
    desc: "Full-stack social platform – post, like, comment, follow, profile editing, Firebase auth & storage.",
    tech: ["React", "Firebase", "Material-UI"],
    live: "https://instasclones.netlify.app/",
    repo: "https://github.com/amitku26/InstaClone",
    img: "/images/insta.png",
  },
  {
    title: "YouTube Clone",
    desc: "Dynamic video browsing, search, and playback using YouTube Data API + TypeScript.",
    tech: ["React", "Tailwind", "TypeScript", "YouTube API"],
    live: "https://youtubeclonees.netlify.app/",
    repo: "https://github.com/amitku26/amityoutube",
    img: "/images/youtube (2).png",
  },
];

export default function Projects() {
  return (
    <section className="py-12">
      <h2 className="section-title">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
