import React from 'react';
import { Link } from 'gatsby';

import './Layout.css';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1 className="page-title">
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
    <div className="mx-auto max-w-xl px-6 py-3 flex flex-col min-h-screen">
      <header>{header}</header>
      <main className="flex-grow">{children}</main>
      <footer className="self-center">
        © {new Date().getFullYear()} Colin Gorrie.
      </footer>
    </div>
  );
};

export default Layout;
