import { FixedObject } from 'gatsby-image';

export type Field<T> = {
  data: T;
};

export type Image = {
  alt: string;
  image: {
    localFiles: {
      childImageSharp: {
        fixed: FixedObject;
      };
    }[];
  };
};

export type MarkdownField = {
  childMarkdownRemark: {
    html: string;
  };
};

export type Testimonial = {
  name: string;
  url: string;
  text: MarkdownField;
  image: Image;
};

export type TestimonialField = {
  data: Testimonial;
};

export type Bio = {
  name: string;
  text: MarkdownField;
  image: Field<Image>[];
};

export type BioField = {
  data: Bio;
};
