import { MetadataRoute } from "next";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "",
        crawlDelay: 60,
        disallow: "/cgi-bin/",
      },
    ],
    sitemap: "https://integration-singularity.vercel.app/sitemap.xml",
  };
}
