import { isEmpty } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Next = ({ currentPageNo, pagesCount, postName }) => {
	const router = useRouter();
	if (!currentPageNo || !pagesCount || isEmpty(postName)) {
		return null;
	}

	// If you are on the last page, dont show next link.
	if (pagesCount < currentPageNo + 1) {
		return null;
	}

	const paginationLink = `/${postName}/page/${currentPageNo + 1}/`;

	return (
		<Link key={`id-${currentPageNo}`} href={{
			pathname: '/[lang]/blog/page/[slug]',
			query: { lang: router?.query?.lang, slug: (currentPageNo + 1) }
		}}>
			<span className="border border-gray-300 px-3 py-2 ml-4 transition duration-500 ease-in-out hover:bg-gray-500 hover:text-white">Next</span>
		</Link>
	);
};

export default Next;
