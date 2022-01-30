import { LoaderFunction, useLoaderData } from "remix";

export const loader: LoaderFunction = async () => {
  return 2;
};
export default function BlogIndex() {
  const loader = useLoaderData();
  return (
    <div>
      <h2>Posts</h2>
      <p>{loader}</p>
    </div>
  );
}
