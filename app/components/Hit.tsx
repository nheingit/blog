import { Highlight } from "react-instantsearch-dom";
export function Hit(props: { hit: any }) {
  return (
    <article>
      <h1>
        <Highlight attribute="title" hit={props.hit} />
      </h1>
      <p>
        <Highlight attribute="description" hit={props.hit} />
      </p>
    </article>
  );
}
