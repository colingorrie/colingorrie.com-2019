import React from 'react';
import { Link } from 'gatsby';

import './Layout.css';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1 className="mt-0 mb-8 font-bold text-5xl">
        <Link className="shadow-none no-underline" to={`/`}>
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3 className="mt-0 mb-4 font-bold text-3xl">
        <Link className="shadow-none no-underline" to={`/`}>
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div className="mx-auto max-w-xl px-6 py-3">
      <header>{header}</header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} Colin Gorrie.</footer>
    </div>
  );
};

export default Layout;
