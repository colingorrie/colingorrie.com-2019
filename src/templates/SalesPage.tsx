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
        content: {
          data: {
            pain: string;
            dream: string;
            fix: string;
            cta1: string;
            socialProof: string;
            overcomeObjections: string;
            uniqueness: string;
            cta2: string;
            urgency: string;
          };
        }[];
      };
      fields: {
        slug: string;
      };
    };
  };
};

const SalesPage: FunctionComponent<Props> = ({ data, location }) => {
  const { airtablePages: page } = data;
  const { title, content } = page.data;

  return (
    <Layout location={location} title={title}>
      <SEO title={title} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content[0].data.pain }} />
      <div dangerouslySetInnerHTML={{ __html: content[0].data.dream }} />
      <div dangerouslySetInnerHTML={{ __html: content[0].data.fix }} />
      <div dangerouslySetInnerHTML={{ __html: content[0].data.cta1 }} />
      <div dangerouslySetInnerHTML={{ __html: content[0].data.socialProof }} />
      <div
        dangerouslySetInnerHTML={{ __html: content[0].data.overcomeObjections }}
      />
      <div dangerouslySetInnerHTML={{ __html: content[0].data.uniqueness }} />
      <div dangerouslySetInnerHTML={{ __html: content[0].data.cta2 }} />
      <div dangerouslySetInnerHTML={{ __html: content[0].data.urgency }} />
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
        content {
          data {
            pain
            dream
            fix
            cta1
            socialProof
            overcomeObjections
            uniqueness
            cta2
            urgency
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
