import React, { FunctionComponent } from 'react';

import { Testimonial as TestimonialType } from '../types';

import { Image } from './Image';

type Props = {
  data: TestimonialType;
};

export const Testimonial: FunctionComponent<Props> = ({ data }) => {
  const { name, url } = data;
  const text = data.text.childMarkdownRemark.html;
  const image = data.image.localFiles[0];

  return (
    <div className="flex flex-row mb-8 p-4 shadow-sm">
      <Image
        node={image}
        className="rounded-full mr-4 self-start flex-shrink-0"
        alt={name}
      />
      <div>
        <div
          className="mb-2 content"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <p>
          &mdash;{' '}
          {url ? (
            <a href={url} className="text-teal-700 underline">
              {name}
            </a>
          ) : (
            name
          )}
        </p>
      </div>
    </div>
  );
};
