import { bundleMDX } from "mdx-bundler";
type GitHubFile = { path: string };
import fs from "fs";

function arrayToObj<ItemType extends Record<string, unknown>>(
  array: Array<ItemType>,
  { keyName, valueName }: { keyName: keyof ItemType; valueName: keyof ItemType }
) {
  const obj: Record<string, ItemType[keyof ItemType]> = {};
  for (const item of array) {
    const key = item[keyName];
    if (typeof key !== "string") {
      throw new Error(`${keyName} of item must be a string`);
    }
    const value = item[valueName];
    obj[key] = value;
  }
  return obj;
}

async function compileMdx(slug: string, githubFiles: Array<GitHubFile>) {
  const indexRegex = new RegExp(`${slug}\\/index.mdx?$`);
  const indexFile = githubFiles.find(({ path }) => indexRegex.test(path));
  if (!indexFile) return null;
  const rootDir = indexFile.path.replace(/index.mdx?$/, "");
  const source = fs.readFileSync(indexFile.path, "utf8");
  try {
    const { frontmatter, code } = await bundleMDX({
      source,
      cwd: rootDir,
    });
    return { code, frontmatter };
  } catch (error: unknown) {
    console.error(`Compilation error for slug: `, slug);
    throw error;
  }
}

export { compileMdx };
