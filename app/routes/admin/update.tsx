import styles from 'highlight.js/styles/agate.css';
import { LinksFunction } from 'remix';

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: styles
		}
	];
};
export default function Admin() {
	return (
		<div className="">
      hello admin update
		</div>
	);
}
