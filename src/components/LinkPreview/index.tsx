"use client"; // Required for client-side fetching in Next.js App Router

import Image from "next/image";
import { useEffect, useState } from "react";

interface LinkPreviewData {
  title: string;
  description: string;
  image: string;
  url: string;
}

interface LinkPreviewProps {
  url: string;
}

export default function LinkPreview({ url }: LinkPreviewProps) {
  const [preview, setPreview] = useState<LinkPreviewData | null>(null);

  useEffect(() => {
    async function fetchPreview() {
      try {
        const res = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`);
        const data: LinkPreviewData = await res.json();
        setPreview(data);
      } catch (error) {
        console.error("Error fetching preview:", error);
      }
    }
    fetchPreview();
  }, [url]);

  if (!preview) return <p>Loading preview...</p>;

  return (
    <a href={preview.url} target="_blank" rel="noopener noreferrer" className="preview-card">
        {preview.image && (
            <Image
                src={preview.image}
                alt={preview.title}
                width={100} // You can adjust the width and height
                height={100}
            />
        )}
    {/* <h3>{preview.title}</h3>
    <p>{preview.description}</p> */}
  </a>
  );
}
