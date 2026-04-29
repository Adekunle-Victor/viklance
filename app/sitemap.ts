import type { MetadataRoute } from "next";

const BASE = "https://www.viklanceorbit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/about`,    changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`,  changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/refer`,    changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/careers`,  changeFrequency: "monthly", priority: 0.7 },
  ];
}
