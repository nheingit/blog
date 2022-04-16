import { LoaderFunction, useLoaderData, Link } from "remix";
import { path, fs } from "~/utils/path.server";
import { bundleMDX } from "~/utils/compile-mdx.server";
import { saveObjectInAlgolia } from "~/utils/algolia";
import removeMd from "remove-markdown";

type removeMd = string;

type Frontmatter = {
  title: string;
  published: Date;
  description: string;
  slug: string;
};

const getDirectories = (source: any) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent: any) => dirent.isDirectory())
    .map((dirent: any) => dirent.name);

export const loader: LoaderFunction = async () => {
  const PathToPosts = path.join(process.cwd(), "posts");
  const postDirs = await getDirectories(PathToPosts);
  const postFrontmatter: Array<{}> = postDirs.map(async (postTitle: string) => {
    const PathToMDX = path.join(
      process.cwd(),
      "posts",
      `${postTitle}`,
      "index.mdx"
    );
    const rootDir = PathToMDX.replace(/index.mdx?$/, "");
    const result = await bundleMDX({
      source: fs.readFileSync(PathToMDX, "utf8"),
      cwd: rootDir,
    });
    if (!result) return null;
    const content: removeMd = removeMd(fs.readFileSync(PathToMDX, "utf8"));
    saveObjectInAlgolia({
      objectID: postTitle,
      content,
      ...result.frontmatter,
    });
    return { ...result.frontmatter, slug: postTitle };
  });
  return Promise.all(postFrontmatter);
};

export default function BlogIndex() {
  const posts = useLoaderData<Frontmatter[]>();
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post: Frontmatter) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
