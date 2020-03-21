import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { EmailOptin } from '../components/EmailOptin';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { MarkdownField } from '../types';

type Props = {
  location: Location;
  data: {
    airtableEmails: {
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
  };
};

const EmailPage: FunctionComponent<Props> = ({ data, location }) => {
  const { airtableEmails: page } = data;
  const { subject, body, date } = page.data;

  return (
    <Layout location={location} title={subject}>
      <SEO title={subject} />
      <div className="mb-8">
        <time>{date}</time>
      </div>
      <div
        className="content mb-8"
        dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
      />
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

export default EmailPage;

export const pageQuery = graphql`
  query EmailBySlug($name: String!) {
    airtableEmails(table: { eq: "Emails" }, data: { name: { eq: $name } }) {
      id
      data {
        name
        subject
        date
        body {
          childMarkdownRemark {
            html
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
