import { Hit as AlgoliaHit } from '@algolia/client-search';
import { useEffect, useRef, useState } from 'react';
import { useHits, UseHitsProps, useSearchBox, UseSearchBoxProps } from 'react-instantsearch-hooks';

export type SearchBoxProps = UseSearchBoxProps;

export type HitsProps<THit> = React.ComponentProps<'div'> &
	UseHitsProps & {
		hitComponent: (props: { hit: THit }) => JSX.Element;
	};

export function Hits<THit extends AlgoliaHit<Record<string, unknown>>>({ hitComponent: Hit }: HitsProps<THit>) {
	const { hits } = useHits();
	console.log(hits);

	return (
		<div className="ais-Hits">
			<ol className="ais-Hits-list">
				{hits.map((hit) => (
					<li key={hit.objectID} className="ais-Hits-item">
						<Hit hit={(hit as unknown) as THit} />
					</li>
				))}
			</ol>
		</div>
	);
}

export function Hit({ hit }: { hit: any }) {
	return <h1>{hit.title}</h1>;
}

export function SearchBox(props: SearchBoxProps) {
	const { query, refine, isSearchStalled } = useSearchBox(props);
	const [ inputValue, setInputValue ] = useState(query);
	const inputRef = useRef<HTMLInputElement>(null);

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		event.stopPropagation();

		if (inputRef.current) {
			inputRef.current.blur();
		}
	}

	function handleReset(event: React.FormEvent) {
		event.preventDefault();
		event.stopPropagation();

		setInputValue('');

		if (inputRef.current) {
			inputRef.current.focus();
		}
	}

	// Track when the value coming from the React state changes to synchronize
	// it with InstantSearch.
	useEffect(
		() => {
			if (query !== inputValue) {
				refine(inputValue);
			}
		},
		[ inputValue, refine ]
	);

	// Track when the InstantSearch query changes to synchronize it with
	// the React state.
	useEffect(
		() => {
			// Bypass the state update if the input is focused to avoid concurrent
			// updates when typing.
			if (document.activeElement !== inputRef.current && query !== inputValue) {
				setInputValue(query);
			}
		},
		[ query ]
	);

	return (
		<input
			ref={inputRef}
			className="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			autoComplete="off"
			autoCorrect="off"
			autoCapitalize="off"
			placeholder="Search..."
			spellCheck={false}
			maxLength={511}
			type="search"
			value={inputValue}
			onChange={(event) => setInputValue(event.currentTarget.value)}
		/>
	);
}
