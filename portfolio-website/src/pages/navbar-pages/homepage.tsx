export const nav = { label: "Home", order: 0, path: "/" };

export function NavIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} {...props}>
      <path d="M12 3 3 10h2v8h5v-5h4v5h5v-8h2z" fill="currentColor" />
    </svg>
  );
}

export default function Homepage() {
  return <h2>Website in the works, more on the way</h2>
}
