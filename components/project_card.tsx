import { useRouter } from "next/navigation";
import "@/styles/style.css";

export default function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  const router = useRouter();
  function handle(path: string) {
    router.push(path);
  }
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="butta" onClick={() => handle(link)}>more ➤</button>
    </div>
  );
}