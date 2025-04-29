module.exports = {
  siteUrl: "https://zonify.ai",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  exclude: ["/icon.ico", "/opengraph-image.jpg"],
};
