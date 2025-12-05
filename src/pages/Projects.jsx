import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Chatty",
    desc: "Real-time chat (1-on-1 & groups) with typing indicators, online status, and secure MongoDB storage.",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB", "Cloudinary", "Zustand"],
    live: "https://chat-app-wlqa.onrender.com/",
    repo: "https://github.com/amitku26/Chat-app",
    img: "/images/chatty.png",
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
