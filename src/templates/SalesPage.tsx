import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import { EmailOptin } from '../components/EmailOptin';
import Layout from '../components/Layout';
import { SalesPageSection } from '../components/SalesPageSection';
import SEO from '../components/SEO';
import { Testimonial } from '../components/Testimonial';
import { Field, Section } from '../types';

type Props = {
  location: Location;
  data: {
    airtablePages: {
      data: {
        title: string;
        sections: Field<Section>[];
      };
      fields: {
        slug: string;
      };
    };
  };
};

const SalesPage: FunctionComponent<Props> = ({ data, location }) => {
  const { airtablePages: page } = data;
  const { title, sections } = page.data;

  return (
    <Layout location={location} title={title}>
      <SEO title={title} />
      {sections?.map(section => (
        <SalesPageSection key={section.data.name} text={section.data.text}>
          {section.data.bio?.map(bio => (
            <Bio key={bio.data.name} data={bio.data} />
          ))}
          {section.data.testimonials?.map(testimonial => (
            <Testimonial key={testimonial.data.name} data={testimonial.data} />
          ))}
          {section.data.type === 'cta' && (
            <EmailOptin idPrefix={section.data.name} />
          )}
        </SalesPageSection>
      ))}
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
        sections {
          data {
            name
            type
            text {
              childMarkdownRemark {
                html
              }
            }
            bio {
              data {
                text {
                  childMarkdownRemark {
                    html
                  }
                }
                image {
                  data {
                    alt
                    image {
                      localFiles {
                        childImageSharp {
                          fluid(maxWidth: 576, quality: 100) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            testimonials {
              data {
                name
                title
                image {
                  localFiles {
                    childImageSharp {
                      fixed(width: 150, height: 150, quality: 100) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
                text {
                  childMarkdownRemark {
                    html
                  }
                }
                url
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
