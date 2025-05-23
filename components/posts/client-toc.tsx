"use client";

import { useEffect, useState } from "react";

interface TocEntry {
  id: string;
  text: string;
  level: number;
}

export function ClientToc() {
  const [toc, setToc] = useState<TocEntry[]>([]);

  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3");

    const tocEntries: TocEntry[] = Array.from(headings)
      .map((heading) => {
        const level = parseInt(heading.tagName.substring(1));
        const text = heading.textContent?.trim() || "";
        const id = heading.id;

        if (id && text) {
          return { id, text, level };
        }
        return null;
      })
      .filter((entry) => entry !== null);

    setToc(tocEntries);
  }, []);

  if (toc.length === 0) {
    return <div className="px-4">목차가 없습니다.</div>;
  }

  return (
    <div className="px-4">
      <h3 className="mb-4 text-xl font-semibold">목차</h3>
      <ul className="space-y-2">
        {toc.map((entry, index) => (
          <li
            key={`${entry.id}-${index}`}
            className={`${entry.level === 1 ? "font-bold" : ""} ${
              entry.level === 2 ? "ml-3" : ""
            } ${entry.level === 3 ? "ml-6" : ""} truncate`}
          >
            <a
              href={`#${entry.id}`}
              className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
              title={entry.text}
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById(entry.id);
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
