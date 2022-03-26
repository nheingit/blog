import { Links, LoaderFunction, Meta, Scripts, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getMDXComponent } from "mdx-bundler/client";
import * as React from "react";
import { path, fs } from "~/utils/path.server";
import { bundleMDX } from "~/utils/compile-mdx.server";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  const PathToMDX = path.join(
    process.cwd(),
    "posts",
    `${params.slug}`,
    "index.mdx"
  );
  const rootDir = PathToMDX.replace(/index.mdx?$/, "");
  try {
    const result = await bundleMDX({
      source: fs.readFileSync(PathToMDX, "utf8"),
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
                className: ["anchor"],
              },
            },
          ],
        ];
        return options;
      },
    });
    if (!result) return null;
    const { code, frontmatter } = result;
    return { code, frontmatter };
  } catch (error) {
    throw new Error(`Didn't find any blog post at blog/${params.slug}`);
  }
};

export default function PostSlug() {
  const { code, frontmatter } = useLoaderData();
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <div>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
      </header>
      <main>
        <Component />
      </main>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Whoops! Looks like you found an error. Sorry about that :(</h1>
        <div className="flex flex-row">
          <p>
            <strong>Error message:</strong> {error.message}
          </p>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
