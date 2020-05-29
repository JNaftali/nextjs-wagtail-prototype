import Link from 'next/link';

export function NavOrSomething() {
  return (
    <ul>
      <li>
        <Link href="/us">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/us/products">
          <a>All</a>
        </Link>
      </li>
      <li>
        <Link href="/us/products/cleansers">
          <a>Cleansers</a>
        </Link>
      </li>
      <li>
        <Link href="/us/products/conditioners">
          <a>Conditioners</a>
        </Link>
      </li>
    </ul>
  );
}
