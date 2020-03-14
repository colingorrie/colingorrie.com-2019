import { FixedObject } from 'gatsby-image';

export type MarkdownField = {
  childMarkdownRemark: {
    html: string;
  };
};

export type Testimonial = {
  name: string;
  url: string;
  text: MarkdownField;
  image: {
    localFiles: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
  };
};

export type TestimonialField = {
  data: Testimonial;
};
