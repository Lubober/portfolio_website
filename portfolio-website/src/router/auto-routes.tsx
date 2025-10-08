import React from "react";

type NavMeta = {
  label?: string;
  path?: string;     // custom URL (default from filename)
  order?: number;    // sort in navbar (lower = earlier)
  hidden?: boolean;  // hide from navbar but keep route
  iconUrl?: string;  // optional image icon (png/svg)
};
type IconComp = React.ComponentType<React.SVGProps<SVGSVGElement>>;
type Mod = { default: React.ComponentType; nav?: NavMeta; NavIcon?: IconComp };

const modules = import.meta.glob("../pages/navbar-pages/**/*.tsx", { eager: true }) as Record<string, Mod>;

const toPath = (file: string) =>
  "/" + file
    .replace(/^..\/pages\/navbar-pages\//, "")
    .replace(/\.tsx$/, "")
    .split("/")
    .map(seg => seg.replace(/\s+/g, "-").replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())
    .join("/");

const toLabel = (file: string) => {
  const raw = file.split("/").pop()!.replace(/\.tsx$/, "");
  const spaced = raw.replace(/\s+/g, " ").replace(/([a-z])([A-Z0-9])/g, "$1 $2");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
};

export type RouteDef = {
  path: string;
  label: string;
  order?: number;
  hidden?: boolean;
  Icon?: IconComp;
  iconUrl?: string;
  Component: React.ComponentType;
};

export const routes: RouteDef[] = Object.entries(modules)
  .map(([file, mod]) => {
    const meta = mod.nav ?? {};
    return {
      path: meta.path ?? toPath(file),
      label: meta.label ?? toLabel(file),
      order: meta.order,
      hidden: meta.hidden,
      iconUrl: meta.iconUrl,
      Icon: mod.NavIcon,
      Component: mod.default,
    };
  })
  .sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999) || a.label.localeCompare(b.label));
