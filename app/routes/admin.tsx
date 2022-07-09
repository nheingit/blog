import styles from 'highlight.js/styles/agate.css';
import { LinksFunction, Outlet, Link } from 'remix';

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
		<div className="grid prose grid-cols-4 p-4 ridjustify-center">
    <div className='col-span-1'>
      <h1> gm admin </h1>
      <ul className='ml-2 list-disc'>
        <li className='my-2'>
          <Link to='create'>
            create post
          </Link>
        </li>
        <li className='my-2'>
          <Link to='delete'>
            delete post
          </Link>
        </li>
        <li className='my-2'>
          <Link to='update'>
            update post
          </Link>
        </li>
      </ul>
    </div>
    <div className="py-10 col-span-3 prose lg:prose-xl">
      <Outlet/>
    </div>
		</div>
	);
}
