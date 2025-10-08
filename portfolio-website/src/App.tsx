import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./pages/navbar";
import { routes } from "./router/auto-routes";

export default function App() {
  const firstVisible = routes.find(r => !r.hidden)?.path ?? "/";

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to={firstVisible} replace />} />
      </Routes>
    </HashRouter>
  );
}
