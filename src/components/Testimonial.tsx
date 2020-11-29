import React, { FunctionComponent } from 'react';

import { Testimonial as TestimonialType } from '../types';

import { Image } from './Image';

type Props = {
  data: TestimonialType;
};

export const Testimonial: FunctionComponent<Props> = ({ data }) => {
  const { name, url, title } = data;
  const text = data.text.childMarkdownRemark.html;
  const image = data.image.localFiles[0];

  return (
    <div className="flex flex-col mb-8 p-10 border-accent-500 border-2 border-solid">
      <Image
        node={image}
        className="rounded-full mb-4 self-center flex-shrink-0"
        alt={name}
      />
      <div>
        <div
          className="mb-2 content"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <p className="uppercase font-body text-xl font-bold">
          {url ? (
            <a href={url} className="text-teal-700 underline">
              {name}
            </a>
          ) : (
            name
          )}
        </p>
        {title && <p className="italic">{title}</p>}
      </div>
    </div>
  );
};
