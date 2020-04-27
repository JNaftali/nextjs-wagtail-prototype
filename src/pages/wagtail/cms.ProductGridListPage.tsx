import fetch from 'node-fetch';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

const HomePage = (props: unknown) => {
  return (
    <div>
      product grid hi
      <ul>
        <li>
          <Link href="/us/products">All</Link>
        </li>
        <li>
          <Link href="/us/products/cleansers">Cleansers</Link>
        </li>
        <li>
          <Link href="/us/products/conditioners">Conditioners</Link>
        </li>
      </ul>
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cmsDataResponse = await fetch(
    `https://api-dev.devatech.us/api/v2/pages/${context.query.wagtailPageId}/`,
  );
  const cmsData = await cmsDataResponse.json();

  return {
    props: {
      cmsData,
    },
  };
};

export default HomePage;
