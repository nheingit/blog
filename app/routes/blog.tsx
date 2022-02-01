import stlyes from "highlight.js/styles/github-dark-dimmed.css";
import { LinksFunction, Outlet, Meta, Links, Scripts } from "remix";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stlyes,
    },
  ];
};

export default function Blog() {
  return (
    <div className="flex justify-center">
      <div className="prose lg:prose-xl py-10">
        <Outlet />
      </div>
    </div>
  );
}
