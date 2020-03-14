import React, { FunctionComponent, ImgHTMLAttributes } from 'react';
import GatsbyImage, { FluidObject, FixedObject } from 'gatsby-image';

type Props = {
  node?: {
    childImageSharp?: {
      fixed?: FixedObject;
      fluid?: FluidObject & { presentationWidth: string };
    };
    publicURL?: string;
  };
} & ImgHTMLAttributes<HTMLImageElement>;

export const Image: FunctionComponent<Props> = ({
  node,
  className,
  alt,
  ...props
}) => {
  if (!node) return <span>[No image available]</span>;
  if (node.childImageSharp && node.childImageSharp.fluid) {
    if (node.childImageSharp.fluid.presentationWidth) {
      return (
        <GatsbyImage
          fluid={node.childImageSharp.fluid}
          className={className}
          alt={alt}
          style={{
            maxWidth: node.childImageSharp.fluid.presentationWidth,
            ...(props.style || {}),
          }}
        />
      );
    }
    return (
      <GatsbyImage
        fluid={node.childImageSharp.fluid}
        className={className}
        alt={alt}
      />
    );
  }

  if (node.childImageSharp && node.childImageSharp.fixed) {
    return (
      <GatsbyImage
        fixed={node.childImageSharp.fixed}
        className={className}
        alt={alt}
      />
    );
  }

  return (
    <img src={node.publicURL} className={className} alt={alt} {...props} />
  );
};
