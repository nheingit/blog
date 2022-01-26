import { LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getMDXComponent } from "mdx-bundler/client";
import * as React from "react";
import fs from "fs";
import path from "path";
import { compileMdx } from "~/utils/compile-mdx.server";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  const PathToMDX = path.join(
    process.cwd(),
    "posts",
    `${params.slug}`,
    "index.mdx"
  );
  const post = await compileMdx(params.slug, [{ path: PathToMDX }]);
  if (!post) return null;
  return post;
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
