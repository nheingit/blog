import styles from 'highlight.js/styles/agate.css';
import { LinksFunction, Outlet } from 'remix';

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: styles
		}
	];
};

export default function Blog() {
	return (
		<div className="flex justify-center">
			<div className="py-10 prose lg:prose-xl">
				<Outlet />
			</div>
		</div>
	);
}
