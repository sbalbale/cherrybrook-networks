"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={18}
        height={18}
        sizes="18x18"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  if (resolvedTheme === "dark") {
    // return <FiSun onClick={() => setTheme("light")} />;
    return (
      <div className="hover:text-accent">
        <SunIcon
          onClick={() => {
            setTheme("light");
            console.log("Theme switched to light");
            window.location.reload();
          }}
        />
      </div>
    );
  }

  if (resolvedTheme === "light") {
    // return <FiMoon onClick={() => setTheme("dark")} />;
    return (
      <div className="hover:text-accent">
        <MoonIcon
          onClick={() => {
            setTheme("dark");
            console.log("Theme switched to dark");
            window.location.reload();
          }}
        />
      </div>
    );
  }
}
