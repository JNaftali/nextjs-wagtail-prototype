// import fetch from 'node-fetch';
import { GetServerSideProps } from 'next';
import { NavOrSomething } from 'src/components/NavOrSomething';

const HomePage = (props: unknown) => {
  return (
    <div>
      home hi
      <NavOrSomething />
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const cmsDataResponse = await fetch(
  //   `https://api-dev.devatech.us/api/v2/pages/${context.query.wagtailPageId}/`,
  // );
  // const cmsData = await cmsDataResponse.json();

  return {
    props: {
      cmsData: context.query.wagtailData,
    },
  };
};

export default HomePage;
