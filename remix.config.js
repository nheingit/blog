/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
  serverDependenciesToBundle: [
    "rehype-highlight",
    "rehype-slug",
    "rehype-code-titles",
    "rehype-autolink-headings",
    /hast/,
    'lowlight',
    "fault",
    /util/,
  ],
};
