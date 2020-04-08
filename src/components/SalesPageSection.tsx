import React, { FunctionComponent } from 'react';

type Props = {
  text?: {
    childMarkdownRemark: {
      html: string;
    };
  };
};

export const SalesPageSection: FunctionComponent<Props> = ({
  children,
  text,
}) => {
  return (
    <div className="mb-12">
      {text && (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: text.childMarkdownRemark.html }}
        ></div>
      )}
      {children}
    </div>
  );
};
