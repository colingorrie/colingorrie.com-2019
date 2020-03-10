import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

type Props = {
  data: {
    allSitePage: {
      edges: {
        node: {
          path: string;
        };
      }[];
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  location: Location;
};

const IndexPage: FunctionComponent<Props> = ({ data, location }) => {
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <h1>Hi people</h1>
      {data.allSitePage.edges.map(edge => (
        <p key={edge.node.path}>
          <Link to={edge.node.path}>{edge.node.path}</Link>
        </p>
      ))}
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query allPages {
    site {
      siteMetadata {
        title
      }
    }
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;
