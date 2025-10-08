import { useParams, Link } from "react-router-dom";
import { DASHES } from "./projects.tsx"; // ← correct path

// Route only (not in navbar)
export const nav = { hidden: true, path: "/dashboard/:slug" };

export default function DashboardRoute() {
  const { slug } = useParams<{ slug: string }>();
  const entry = DASHES.find(d => d.slug === slug);

  if (!entry) {
    return (
      <p>
        Dashboard not found. <Link to="/projects">Back to Projects</Link>
      </p>
    );
  }

  return (
    <>
      <p><Link to="/projects">← Back to Projects</Link></p>
      <h1>{entry.title}</h1>
      <div style={{ aspectRatio: "16 / 9", width: "100%" }}>
        <iframe
          title={entry.title}
          src={entry.src}
          style={{ width: "100%", height: "100%", border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </>
  );
}
