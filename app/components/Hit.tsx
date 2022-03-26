import { Hit as AlgoliaHit } from '@algolia/client-search';
import { useHits, UseHitsProps } from 'react-instantsearch-hooks';

export type HitsProps<THit> = React.ComponentProps<'div'> &
	UseHitsProps & {
		hitComponent: (props: { hit: THit }) => JSX.Element;
	};

export function Hits<THit extends AlgoliaHit<Record<string, unknown>>>({ hitComponent: Hit }: HitsProps<THit>) {
	const { hits } = useHits();

	return (
		<div className="ais-Hits">
			<ol className="ais-Hits-list">
				{hits.map((hit) => (
					<li key={hit.objectID} className="ais-Hits-item">
						<Hit hit={(hit.title as unknown) as THit} />
					</li>
				))}
			</ol>
		</div>
	);
}

export function Hit({ hit }: { hit: any }) {
	return (
		<article>
			<h1>{hit.title}</h1>
			<p>{hit.description}</p>
		</article>
	);
}
