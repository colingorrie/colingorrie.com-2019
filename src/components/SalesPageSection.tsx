import React, { FunctionComponent } from 'react';

type Props = {
  section: {
    childMarkdownRemark: {
      html: string;
    };
  };
};

export const SalesPageSection: FunctionComponent<Props> = ({
  children,
  section,
}) => {
  return (
    <div className="mb-8">
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: section.childMarkdownRemark.html }}
      ></div>
      {children}
    </div>
  );
};
