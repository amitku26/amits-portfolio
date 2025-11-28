import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "MediConnect (SaaS) - Admin/Doctor(Role)",
    desc: `Built a full-stack SaaS healthcare management system with role-based authentication for Admin,
Doctor, and User using the MERN stack, Razorpay API integration for the payment of the appointment by the user and ReduxToolkit for the state management`,
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay API",
      "ReduxToolkit",
      "Cloudinary",
    ],
    live: "https://mediconnect-4cxm.vercel.app/",
    repo: "https://github.com/rathoraryann/mediconnect",
    img: "/images/mediconnectA&D.jpg",
  },
  {
    title: "MediConnect (SaaS) - User(Role)",
    desc: `Built a full-stack SaaS healthcare management system with role-based authentication for Admin,
Doctor, and User using the MERN stack, Razorpay API integration for the payment of the appointment by the user and ReduxToolkit for the state management`,
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay API",
      "ReduxToolkit",
      "Cloudinary",
    ],
    live: "https://mediconnect-ecru.vercel.app/",
    repo: "https://github.com/rathoraryann/mediconnect",
    img: "/images/mediconnectUser.jpg",
  },
  {
    title: "TalkNest",
    desc: "Real-time chat (1-on-1 & groups) with typing indicators, online status, and secure MongoDB storage.",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB"],
    live: "https://talk-nest-seven.vercel.app/",
    repo: "https://github.com/rathoraryann/talknest",
    img: "/images/talknest.jpg",
  },
  {
    title: "Instagram Clone",
    desc: "Full-stack social platform – post, like, comment, follow, profile editing, Firebase auth & storage.",
    tech: ["React", "Firebase", "Material-UI"],
    live: "https://aryaninsta.netlify.app",
    repo: "https://github.com/rathoraryann/InstaProject",
    img: "/images/instagram-clone.jpg",
  },
  {
    title: "YouTube Clone",
    desc: "Dynamic video browsing, search, and playback using YouTube Data API + TypeScript.",
    tech: ["React", "Tailwind", "TypeScript", "YouTube API"],
    live: "https://aryanyoutubeproject.netlify.app/",
    repo: "https://github.com/rathoraryann/aryanYoutube",
    img: "/images/youtube-clone.jpg",
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
