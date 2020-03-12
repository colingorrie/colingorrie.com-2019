import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';

import { EmailOptin } from '../components/EmailOptin';
import Layout from '../components/Layout';
import { SalesPageSection } from '../components/SalesPageSection';
import SEO from '../components/SEO';
import { Testimonial } from '../components/Testimonial';

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
      <SalesPageSection section={contentData.pain}></SalesPageSection>
      <SalesPageSection section={contentData.dream}></SalesPageSection>
      <SalesPageSection section={contentData.fix}></SalesPageSection>
      <SalesPageSection section={contentData.cta1}>
        <EmailOptin idPrefix="cta1" />
      </SalesPageSection>
      <SalesPageSection section={contentData.socialProof}>
        <Testimonial />
      </SalesPageSection>
      <SalesPageSection
        section={contentData.overcomeObjections}
      ></SalesPageSection>
      <SalesPageSection section={contentData.uniqueness}></SalesPageSection>
      <SalesPageSection section={contentData.cta2}>
        <EmailOptin idPrefix="cta2" />
      </SalesPageSection>
      <SalesPageSection section={contentData.urgency}></SalesPageSection>
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
