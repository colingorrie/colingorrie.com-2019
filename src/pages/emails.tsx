import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { EmailOptin } from '../components/EmailOptin';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { MarkdownField } from '../types';

type Props = {
  location: Location;
  data: {
    allAirtableEmails: {
      edges: {
        node: {
          data: {
            name: string;
            subject: string;
            date: Date;
            body: MarkdownField;
          };
          fields: {
            slug: string;
          };
        };
      }[];
    };
  };
};

const EmailsPage: FunctionComponent<Props> = ({ data, location }) => {
  const { allAirtableEmails: emails } = data;

  return (
    <Layout location={location} title="Email Archive">
      <SEO title="Email Archive" />
      {emails.edges.map(({ node: email }) => {
        return (
          <div key={email.fields.slug}>
            <div className="mb-8">
              <a href={`/emails/${email.fields.slug}`} className="link">
                <h3 className="text-lg">{email.data.subject}</h3>
              </a>
              <p className="italic text-sm">
                <time>{email.data.date}</time>
              </p>
            </div>
          </div>
        );
      })}
      <div className="content mb-2">
        <h2>Want to get more tips like this?</h2>
        <p>
          Sign up to get bite-sized coding tips delivered into your inbox once a
          week.
        </p>
        <EmailOptin idPrefix="cta" />
      </div>
    </Layout>
  );
};

export default EmailsPage;

export const pageQuery = graphql`
  query AllEmails {
    allAirtableEmails(
      filter: { table: { eq: "Emails" } }
      sort: { fields: [data___date], order: DESC }
    ) {
      edges {
        node {
          data {
            name
            subject
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
