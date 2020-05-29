import Link from 'next/link';

export function NavOrSomething() {
  return (
    <ul>
      <li>
        <Link href="/wagtail/cms.HomePage" as="/us">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/wagtail/cms.ProductGridListPage" as="/us/products">
          <a>All</a>
        </Link>
      </li>
      <li>
        <Link
          href="/wagtail/cms.ProductGridListPage"
          as="/us/products/cleansers"
        >
          <a>Cleansers</a>
        </Link>
      </li>
      <li>
        <Link
          href="/wagtail/cms.ProductGridListPage"
          as="/us/products/conditioners"
        >
          <a>Conditioners</a>
        </Link>
      </li>
    </ul>
  );
}
