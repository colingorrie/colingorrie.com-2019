import React, { FunctionComponent } from 'react';

type Props = {};

export const Testimonial: FunctionComponent<Props> = () => {
  const name = 'George Borges';
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
  const url = 'https://colingorrie.com';

  return (
    <div className="flex flex-row mb-8 p-4 shadow-sm">
      <img
        src="https://via.placeholder.com/150"
        className="rounded-full mr-4 self-start"
        alt={name}
      />
      <div>
        <p className="mb-2">{text}</p>
        <p>
          &mdash;{' '}
          <a href={url} className="text-teal-700 underline">
            {name}
          </a>
        </p>
      </div>
    </div>
  );
};
