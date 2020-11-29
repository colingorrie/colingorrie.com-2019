require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Colin Gorrie`,
    author: `Colin Gorrie`,
    description: `Colin Gorrie's home on the web`,
    siteUrl: `https://colingorrie.com/`,
    social: {
      twitter: `colingorrie`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `app8D8IxuFkE09HNK`,
            tableName: `Pages`,
            tableLinks: [`content`, `sections`],
            queryName: `Pages`,
            separateNodeType: true,
            separateMapType: true,
          },
          {
            baseId: `app8D8IxuFkE09HNK`,
            tableName: `Testimonials`,
            mapping: {
              text: 'text/markdown',
              image: 'fileNode',
            },
            queryName: `Testimonials`,
            separateNodeType: true,
            separateMapType: true,
          },
          {
            baseId: `app8D8IxuFkE09HNK`,
            tableName: `Emails`,
            mapping: {
              body: 'text/markdown',
            },
            queryName: `Emails`,
            separateNodeType: true,
            separateMapType: true,
          },
          {
            baseId: `app8D8IxuFkE09HNK`,
            tableName: `Images`,
            mapping: {
              image: 'fileNode',
            },
            queryName: `Images`,
            separateNodeType: true,
            separateMapType: true,
          },
          {
            baseId: `app8D8IxuFkE09HNK`,
            tableName: `Bios`,
            mapping: {
              text: 'text/markdown',
            },
            queryName: `Bios`,
            separateNodeType: true,
            separateMapType: true,
            tableLinks: [`image`],
          },
          {
            baseId: `app8D8IxuFkE09HNK`,
            tableName: `Sections`,
            mapping: {
              text: 'text/markdown',
            },
            queryName: `Sections`,
            separateNodeType: true,
            separateMapType: true,
            tableLinks: [`bio`, `testimonials`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-21650974-4',
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Colin Gorrie`,
        short_name: `Colin Gorrie`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: 'gatsby-background-image',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
    },
  ],
};
