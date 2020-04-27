import fetch from 'node-fetch';
import { GetServerSideProps } from 'next';

const HomePage = (props: unknown) => {
  return (
    <div>
      product grid hi
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
