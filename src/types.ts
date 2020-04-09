import { FixedObject, FluidObject } from 'gatsby-image';

export type Field<T> = {
  data: T;
};

export type Image = {
  alt: string;
  localFiles: {
    childImageSharp: {
      fixed?: FixedObject;
      fluid?: FluidObject;
    };
  }[];
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

export type Bio = {
  name: string;
  text: MarkdownField;
  image: Field<{ image: Image }>[];
};

export type Section = {
  name: string;
  type?: string;
  text: MarkdownField;
  testimonials?: Field<Testimonial>[];
  bio?: Field<Bio>[];
};
