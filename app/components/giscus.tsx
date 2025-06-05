"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Giscus() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'ReintB/reinhart-barus-v1');
    script.setAttribute('data-repo-id', 'R_kgDOO2ssOQ');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOO2ssOc4CrFE6');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', resolvedTheme === 'dark' ? 'dark_dimmed' : 'light');
    script.setAttribute('data-lang', 'en');
    script.crossOrigin = 'anonymous';
    script.async = true;

    const giscusWrapper = document.querySelector('.giscus-wrapper');
    if (giscusWrapper) {
      // Clear existing content
      giscusWrapper.innerHTML = '';
      giscusWrapper.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      script.remove();
    };
  }, [mounted, resolvedTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="mt-10 mb-5">
      <h2 className="mb-4 text-2xl font-medium">Comments</h2>
      <div className="giscus-wrapper" />
      <style jsx>{`
        .giscus-wrapper {
          width: 100%;
        }
        .giscus {
          width: 100%;
        }
      `}</style>
    </section>
  );
}
