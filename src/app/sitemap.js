// the sitemaps will be generated in this way in nextjs, replace urls with live url
export default function sitemap() {
  return [
    {
      url: "https://singularity-five.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
