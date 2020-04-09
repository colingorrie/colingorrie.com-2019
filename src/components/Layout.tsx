import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

type Props = {
  location: {
    pathname: string;
  };
  title: string;
};

const Layout: FunctionComponent<Props> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1 className="site-title">
        <Link className="shadow-none no-underline" to={`/`}>
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3 className="site-title">
        <Link className="shadow-none no-underline" to={`/`}>
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div className="mx-auto max-w-xl px-6 md:px-0 py-10 flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <footer className="self-center text-center text-gray-700">
        <nav>
          <div>{header}</div>
          <ul className="flex flex-row justify-center">
            {/* <li className="mx-4">
              <a href="/" className="link">
                Home
              </a>
            </li> */}
            {/* <li className="mx-4">
              <a href="/start-here" className="link">
                Start Here
              </a>
            </li> */}
            {/* <li className="mx-4">
              <a href="/emails" className="link">
                Email Archive
              </a>
            </li> */}
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;
