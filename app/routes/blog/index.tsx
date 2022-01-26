import { LoaderFunction, useLoaderData, Link, Outlet } from "remix";

export const loader: LoaderFunction = () => {
  return 2;
};

export default function BlogIndex() {
  return (
    <div>
      <h2>Posts</h2>
    </div>
  );
}
