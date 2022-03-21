import { bundleMDX } from "mdx-bundler";
type GitHubFile = { path: string };
import path from "path";
import fs from "fs";
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from "rehype-highlight";

async function compileMdx(slug: string, githubFiles: Array<GitHubFile>) {
  const indexRegex = new RegExp(`${slug}\\/index.mdx?$`);
  const indexFile = githubFiles.find(({ path }) => indexRegex.test(path));
  if (!indexFile) return null;
  const rootDir = indexFile.path.replace(/index.mdx?$/, "");
  const source = fs.readFileSync(indexFile.path, "utf8");
  try {
    if (process.platform === "win32") {
      process.env.ESBUILD_BINARY_PATH = path.join(
        process.cwd(),
        "node_modules",
        "esbuild",
        "esbuild.exe"
      );
    } else {
      process.env.ESBUILD_BINARY_PATH = path.join(
        process.cwd(),
        "node_modules",
        "esbuild",
        "bin",
        "esbuild"
      );
    }
    const { frontmatter, code } = await bundleMDX({
      source,
      cwd: rootDir,
      xdmOptions(options) {
        options.rehypePlugins = [
          ...(options?.rehypePlugins ?? []),
          rehypeHighlight,
          rehypeSlug,
          rehypeCodeTitles,
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                className: ['anchor']
              }
            }
          ]
        ];
        return options;
      },
    });
    return { code, frontmatter };
  } catch (error: unknown) {
    console.error(`Compilation error for slug: `, slug);
    throw error;
  }
}

export { compileMdx };
export { bundleMDX } from "mdx-bundler"