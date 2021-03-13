import { Client } from "../prismic";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "../sm-resolver";

import Layout from "./../components/Layout";

const Page = (props) => {
  return (
    <Layout menu={props.menu}>
      <SliceZone {...props} resolver={resolver} />
    </Layout>
  );
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: () => "homepage",
});

export default Page;
