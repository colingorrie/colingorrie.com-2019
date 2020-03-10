const path = require(`path`);
const parseFilepath = require('parse-filepath');

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;

  if (node.internal.type === `AirtablePages` && node.table === `Pages`) {
    slug = `/${node.data.name
      .replace(/ /g, '-')
      .replace(/[,&]/g, '')
      .toLowerCase()}/`;

    // Add slug as a field on the node.
    createNodeField({ node, name: `slug`, value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const SalesPage = path.resolve(`src/templates/SalesPage.tsx`);

    // Query for all markdown "nodes" and for the slug we previously created.
    resolve(
      graphql(
        `
          {
            allAirtablePages(filter: { table: { eq: "Pages" } }) {
              edges {
                node {
                  id
                  data {
                    name
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          result.errors.forEach(error => {
            console.log(error);
          });

          reject(result.errors);
        }

        result.data.allAirtablePages.edges.forEach(edge => {
          createPage({
            path: edge.node.fields.slug, // required, we don't have frontmatter for this page hence separate if()
            component: SalesPage,
            context: {
              name: edge.node.data.name,
            },
          });
        });

        return;
      })
    );
  });
};
