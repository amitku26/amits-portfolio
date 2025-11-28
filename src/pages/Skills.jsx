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
  { Icon: SiReact, name: "React.js" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
  { Icon: SiRedux, name: "Redux" },
  { Icon: SiSocketdotio, name: "Socket.IO" },
  { Icon: SiFirebase, name: "Firebase" },
  { Icon: SiGit, name: "Git & GitHub" },
];

export default function Skills() {
  return (
    <section className="py-12">
      <h2 className="section-title">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skillMap.map(({ Icon, name }) => (
          <div
            key={name}
            className="flex flex-col items-center p-4 bg-gray rounded-lg hover:bg-gray-light hover:text-dark transition"
          >
            <Icon className="text-4xl mb-2" />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
