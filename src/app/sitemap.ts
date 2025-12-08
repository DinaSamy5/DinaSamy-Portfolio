export default function sitemap() {
  const now = new Date().toISOString();

  return [
    {
      url: "https://dina-samy-portfolio-wwcl.vercel.app/",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}