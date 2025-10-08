import { NavLink } from "react-router-dom";
import { routes } from "../router/auto-routes";

export default function Navbar() {
  const items = routes.filter(r => !r.hidden);
  return (
    <nav className="navbar" style={{ display: "flex", gap: 16, padding: 12, borderBottom: "1px solid #eee" }}>
      {items.map(r => (
        <NavLink
          key={r.path}
          to={r.path}
          style={({ isActive }) => ({
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            fontWeight: isActive ? 700 : 400
          })}
          aria-label={r.label}
          title={r.label}
        >
          {r.Icon ? (
            <>
              <r.Icon aria-hidden width={18} height={18} />
              <span style={{
                position: "absolute", width: 1, height: 1, padding: 0, margin: -1,
                overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0
              }}>{r.label}</span>
            </>
          ) : r.iconUrl ? (
            <>
              <img src={r.iconUrl} width={18} height={18} alt="" />
              <span className="sr-only">{r.label}</span>
            </>
          ) : (
            r.label
          )}
        </NavLink>
      ))}
    </nav>
  );
}
