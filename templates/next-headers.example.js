/** Next.js headers() example. Adapt to next.config.ts as needed. */
module.exports = {
  async headers() {
    const preview = process.env.VERCEL_ENV === "preview";
    const robots = preview
      ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]
      : [];

    return [
      {
        source: "/:path*",
        headers: [
          ...robots,
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};
