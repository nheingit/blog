/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "netlify/functions/server/build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
  mdx: async filename => {
    const [rehypeHightlight] =  await Promise.all([
      import("rehype-highlight").then(mod => mod.default)
    ]);
    return {
      rehypePlugins: [rehypeHightlight]
    }
  }
};
