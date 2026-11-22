export const siteConfig = {
  name: "NOTTICA",
  tagline: "Digital experiences, thoughtfully crafted.",
  domain: "nottica.in",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nottica.in",
  email: "pvrrafid@gmail.com",
  whatsappNumber: "+971566390270",
  whatsappUrl: "https://wa.me/971566390270",
  colors: {
    burgundy: "#790B13",
    darkBurgundy: "#4B0710",
    ivory: "#FFF0DC",
    softIvory: "#FFF8EE",
    mutedRose: "#B97878",
    champagne: "#D8C2A0",
    taupe: "#8C786A",
  },
} as const;
