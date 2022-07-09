import path from 'path'
import fs from 'fs/promises'
import syncFs from 'fs'
import parseFrontMatter from "front-matter"
import invariant from "tiny-invariant";
import { marked } from "marked";


export type Post = {
  slug: string;
  title: string;
  markdown?: string;
};

export type PostMarkdownAttributes = {
  title: string;
};

const postsPath = path.join(__dirname, "..", "posts")

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title;
}

export async function getPosts() {
  const dir = await fs.readdir(postsPath);
  return Promise.all(
    dir.map(async filename => {
      const file = await fs.readFile(
        path.join(postsPath, filename)
      );
      const { attributes } = parseFrontMatter(
        file.toString()
      );
      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad meta data!`
      );
      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: attributes.title
      };
    })
  )
}

export async function createPost(post: Post) {
  if (!post.markdown) return 'no markdown in post, try again'
  syncFs.mkdirSync(path.join(postsPath, post.slug));
  const path_to_write = path.join(postsPath, post.slug, 'index.mdx')
  fs.writeFile(path_to_write, post.markdown)
}

export async function getPost(slug: string) {
  const filepath = path.join(postsPath, slug + ".mdx");
  const file = await fs.readFile(filepath);
  const { attributes, body } = parseFrontMatter(file.toString());
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`
  );
  const html = marked(body)
  return { slug, html, title: attributes.title };
}
