import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import { EmailOptin } from '../components/EmailOptin';
import Layout from '../components/Layout';
import { SalesPageSection } from '../components/SalesPageSection';
import SEO from '../components/SEO';
import { Testimonial } from '../components/Testimonial';
import { MarkdownField, TestimonialField, BioField } from '../types';

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
            testimonials: TestimonialField[];
            overcomeObjections: MarkdownField;
            uniqueness: MarkdownField;
            bio: BioField[];
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
        {contentData.testimonials.map(testimonial => (
          <Testimonial key={testimonial.data.name} data={testimonial.data} />
        ))}
      </SalesPageSection>
      <SalesPageSection
        section={contentData.overcomeObjections}
      ></SalesPageSection>
      <SalesPageSection section={contentData.uniqueness}>
        {contentData.bio.map(bio => (
          <Bio key={bio.data.name} data={bio.data} />
        ))}
      </SalesPageSection>
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
                          fixed(width: 576, height: 400, quality: 100) {
                            ...GatsbyImageSharpFixed
                          }
                        }
                      }
                    }
                  }
                }
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
            testimonials {
              data {
                name
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
