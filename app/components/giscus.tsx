'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Giscus() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="mt-10 mb-5">
      <h2 className="mb-4 text-2xl font-medium">Comments</h2>
      <script
        src="https://giscus.app/client.js"
        data-repo="ReintB/reinhart-barus-v1"
        data-repo-id="R_kgDOLXGQww"
        data-category="Blog Comments"
        data-category-id="DIC_kwDOLXGQw84CdwYE"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme={resolvedTheme === 'dark' ? 'dark_dimmed' : 'light'}
        data-lang="en"
        data-loading="lazy"
        crossOrigin="anonymous"
        async
      ></script>
    </section>
  );
} 