import { Client } from "../prismic";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "../sm-resolver";

import Layout from "./../components/Layout";

const HomePage = (props) => {
  return (
    // <Layout menu={props.menu}>
    //   <SliceZone {...props} resolver={resolver} />
    // </Layout>
    <div>test</div>
  );
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: "homepage",
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: "page",
  fallback: true, // process.env.NODE_ENV === 'development',
  //formatPath: ({ uid }) => ({ params: { uid } }),
});

export default HomePage;
