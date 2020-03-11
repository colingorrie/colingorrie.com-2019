import React, { FunctionComponent } from 'react';

type Props = {
  section: {
    childMarkdownRemark: {
      html: string;
    };
  };
};

export const SalesPageSection: FunctionComponent<Props> = ({ section }) => {
  return (
    <div
      className="content mb-8"
      dangerouslySetInnerHTML={{ __html: section.childMarkdownRemark.html }}
    />
  );
};
