import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

type Props = {
  location: Location;
  data: {
    airtablePages: {
      data: {
        title: string;
      };
      fields: {
        slug: string;
      };
    };
  };
};

const SalesPage: FunctionComponent<Props> = ({ data, location }) => {
  const { airtablePages: page } = data;

  return (
    <Layout location={location} title={page.data.title}>
      <SEO title={page.data.title} />
      <h1>{page.data.title}</h1>
    </Layout>
  );
};

export default SalesPage;

export const pageQuery = graphql`
  query SalesPageBySlug($name: String!) {
    airtablePages(table: { eq: "Pages" }, data: { name: { eq: $name } }) {
      id
      data {
        name
        title
      }
      fields {
        slug
      }
    }
  }
`;
