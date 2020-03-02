import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Bio: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div className="flex mb-12">
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        className="mr-6 mb-0 rounded-full"
        style={{
          minWidth: 200,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p className="content">
        <strong>{author}</strong> is a linguist and developer. He lives in
        Hamilton, Ontario. Follow him on Twitter
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>@{social.twitter}</a>.
      </p>
    </div>
  );
};

export default Bio;
