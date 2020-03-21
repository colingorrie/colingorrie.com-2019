const path = require(`path`);
const parseFilepath = require('parse-filepath');

const { createFilePath } = require(`gatsby-source-filesystem`);

const SalesPage = path.resolve(`src/templates/SalesPage.tsx`);
const EmailPage = path.resolve(`src/templates/EmailPage.tsx`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;

  if (node.internal.type === `AirtablePages` && node.table === `Pages`) {
    slug = `${node.data.name
      .replace(/ /g, '-')
      .replace(/[,&]/g, '')
      .toLowerCase()}/`;

    // Add slug as a field on the node.
    createNodeField({ node, name: `slug`, value: slug });
  }

  if (node.internal.type === `AirtableEmails` && node.table === `Emails`) {
    slug = `${node.data.name
      .replace(/ /g, '-')
      .replace(/[,&]/g, '')
      .toLowerCase()}/`;

    // Add slug as a field on the node.
    createNodeField({ node, name: `slug`, value: slug });
  }
};

const createEmailPages = (graphql, createPage) =>
  new Promise((resolve, reject) => {
    // Query for all markdown "nodes" and for the slug we previously created.
    resolve(
      graphql(
        `
          {
            allAirtableEmails(filter: { table: { eq: "Emails" } }) {
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

        result.data.allAirtableEmails.edges.forEach(edge => {
          createPage({
            path: `/emails/${edge.node.fields.slug}`, // required, we don't have frontmatter for this page hence separate if()
            component: EmailPage,
            context: {
              name: edge.node.data.name,
            },
          });
        });

        return;
      })
    );
  });

const createSalesPages = (graphql, createPage) =>
  new Promise((resolve, reject) => {
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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return Promise.all([
    createSalesPages(graphql, createPage),
    createEmailPages(graphql, createPage),
  ]);
};
