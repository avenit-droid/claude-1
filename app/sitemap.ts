import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://luxora.future";
  const sections = [
    "",
    "#about",
    "#tech",
    "#ai",
    "#products",
    "#gallery",
    "#team",
    "#blog",
    "#careers",
    "#pricing",
    "#contact",
  ];

  return sections.map((path) => ({
    url: `${base}/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
