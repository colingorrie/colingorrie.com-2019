import React, { FunctionComponent } from 'react';
import Image from 'gatsby-image';
import { Bio as BioType } from 'types';

type Props = {
  data: BioType;
};

const Bio: FunctionComponent<Props> = ({ data }) => {
  const image = data.image[0].data;
  console.log(image);

  return (
    <div className="flex flex-col">
      <Image
        fixed={image.image.localFiles[0].childImageSharp.fixed}
        alt={image.alt}
        className="mb-6"
      />
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: data.text.childMarkdownRemark.html,
        }}
      ></div>
    </div>
  );
};

export default Bio;
