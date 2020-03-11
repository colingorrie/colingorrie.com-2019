import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { SalesPageSection } from '../components/SalesPageSection';

type MarkdownField = {
  childMarkdownRemark: {
    html: string;
  };
};

type Props = {
  location: Location;
  data: {
    airtablePages: {
      data: {
        title: string;
        content: {
          data: {
            pain: MarkdownField;
            dream: MarkdownField;
            fix: MarkdownField;
            cta1: MarkdownField;
            socialProof: MarkdownField;
            overcomeObjections: MarkdownField;
            uniqueness: MarkdownField;
            cta2: MarkdownField;
            urgency: MarkdownField;
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

  const contentData = content[0].data;

  return (
    <Layout location={location} title={title}>
      <SEO title={title} />
      <SalesPageSection section={contentData.pain} />
      <SalesPageSection section={contentData.dream} />
      <SalesPageSection section={contentData.fix} />
      <SalesPageSection section={contentData.cta1} />
      <SalesPageSection section={contentData.socialProof} />
      <SalesPageSection section={contentData.overcomeObjections} />
      <SalesPageSection section={contentData.uniqueness} />
      <SalesPageSection section={contentData.cta2} />
      <SalesPageSection section={contentData.urgency} />
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
            cta1 {
              childMarkdownRemark {
                html
              }
            }
            dream {
              childMarkdownRemark {
                html
              }
            }
            uniqueness {
              childMarkdownRemark {
                html
              }
            }
            cta2 {
              childMarkdownRemark {
                html
              }
            }
            name
            overcomeObjections {
              childMarkdownRemark {
                html
              }
            }
            fix {
              childMarkdownRemark {
                html
              }
            }
            pain {
              childMarkdownRemark {
                html
              }
            }
            urgency {
              childMarkdownRemark {
                html
              }
            }
            socialProof {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
