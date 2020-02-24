import React from 'react';
import { graphql } from 'gatsby';
import map from 'lodash/fp/map';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const categories = data.allMarkdownRemark.group;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Colin Gorrie" />
      <Bio />
      {map(({ fieldValue, edges }) => (
        <div>
          <h2 className="capitalize">{fieldValue}</h2>
          {map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <div key={node.fields.slug}>
                <h3 className="mb-2">
                  <a
                    href={node.frontmatter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </a>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            );
          })(edges)}
        </div>
      ))(categories)}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { visible: { eq: true } } }) {
      group(field: frontmatter___category) {
        fieldValue
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              category
              description
              title
              url
            }
          }
        }
      }
    }
  }

  #    allMarkdownRemark(
  #      sort: { fields: [frontmatter___title], order: DESC }
  #      filter: { frontmatter: { visible: { eq: true } } }
  #    ) {
  #      edges {
  #        node {
  #          excerpt
  #          fields {
  #            slug
  #          }
  #          frontmatter {
  #            category
  #            description
  #            title
  #            url
  #          }
  #        }
  #      }
  #    }
  #  }
`;
