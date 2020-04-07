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
    <div className="mb-8">
      {text && (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: text.childMarkdownRemark.html }}
        ></div>
      )}
      {children}
      <hr className="h-3 bg-brand-500 w-1/2" />
    </div>
  );
};
