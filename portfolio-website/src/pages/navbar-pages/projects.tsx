import { Link } from "react-router-dom";

export type Dash = { slug: string; title: string; src: string };

// 👇 Add your dashboards here
export const DASHES: Dash[] = [
  {
    slug: "uk-employment",
    title: "UK Employment rate",
    src: "https://app.powerbi.com/view?r=eyJrIjoiZDMyOTljMDItZTJlZi00NzBmLTljZjgtOGU5ZWUxNmJlZjg4IiwidCI6IjM2YzZkMjBhLTVkMjktNGU3MS05ZTBkLWFkOTVhYTIxYzJlNSJ9",
  },
  // { slug: "another-dash", title: "Another Dashboard", src: "https://app.powerbi.com/view?r=..." },
];

// Show in navbar as “Projects”
export const nav = { label: "Projects", order: 30 };

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <ul>
        {DASHES.map(d => (
          <li key={d.slug}>
            <Link to={`../dashboard/${d.slug}`}>{d.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
