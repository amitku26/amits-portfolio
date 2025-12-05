import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiSocketdotio,
  SiFirebase,
  SiGit,
} from "react-icons/si";

const skillMap = [
  { Icon: SiReact, name: "React.js", color: "#61DAFB" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#3C873A" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
  { Icon: SiRedux, name: "Redux", color: "#764ABC" },
  { Icon: SiSocketdotio, name: "Socket.IO", color: "#010101" },
  { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { Icon: SiGit, name: "Git & GitHub", color: "#F05032" },
];

export default function Skills() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skillMap.map(({ Icon, name, color }) => (
          <div
            key={name}
            className="p-5 rounded-xl bg-gray-800/50 backdrop-blur-md 
                       flex flex-col items-center hover:scale-105 
                       transition-all border border-gray-700 hover:border-gray-500"
          >
            <Icon className="text-5xl mb-3" style={{ color }} />
            <span className="text-sm text-gray-200">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
