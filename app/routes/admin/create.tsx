import styles from 'highlight.js/styles/agate.css';
import { createPost } from '~/post'
import { Form, json,  LinksFunction, ActionFunction, redirect } from 'remix';

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: styles
		}
	];
};

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

export default function Admin() {
	return (
		<div className="">
      <h2>
        hello admin create
      </h2>
      <Form method="post">
        <p>
          <label>
            Post Title:{" "}
            <input
              type="text"
              name="title"
              className={inputClassName}
            />
          </label>
        </p>
        <p>
          <label>
            Post Slug:{" "}
            <input
              type="text"
              name="slug"
              className={inputClassName}
            />
          </label>
        </p>
        <p>
          <label htmlFor="markdown">Markdown:</label>
          <br />
          <textarea
            id="markdown"
            rows={20}
            name="markdown"
            className={`${inputClassName} font-mono`}
          />
        </p>
        <p className="text-right">
          <button
            type="submit"
            className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          >
            Create Post
          </button>
        </p>
    </Form>
		</div>
	);
}


type ActionData =
  | {
      title: null | string;
      slug: null | string;
      markdown: null | string;
    }
  | undefined;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");

  const errors: ActionData = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required",
  };
  const hasErrors = Object.values(errors).some(
    (errorMessage) => errorMessage
  );
  if (hasErrors) {
    return json<ActionData>(errors);
  }

  const post = {
    title,
    slug,
    markdown
  }
  //@ts-ignore
  await createPost(post);

  return redirect("/garden");
};
