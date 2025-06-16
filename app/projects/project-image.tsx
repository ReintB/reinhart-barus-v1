"use client";

import Image from "next/image";
import { useState } from "react";

export function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
      onError={() => setImgSrc("/projects/projects.png")}
      priority
    />
  );
}
