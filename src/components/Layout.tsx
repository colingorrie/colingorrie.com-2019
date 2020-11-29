import React, { FunctionComponent } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

type Props = {
  location: {
    pathname: string;
  };
  title: string;
  showTitle: boolean;
};

const Layout: FunctionComponent<Props> = ({
  location,
  showTitle,
  title,
  children,
}) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { site } = data;
  const { siteMetadata } = site;
  const { title: siteTitle } = siteMetadata;

  const rootPath = `${__PATH_PREFIX__}/`;
  let SiteTitle;

  if (location.pathname === rootPath) {
    SiteTitle = (
      <h1 className="site-title">
        <Link className="shadow-none no-underline" to={`/`}>
          {siteTitle}
        </Link>
      </h1>
    );
  } else {
    SiteTitle = (
      <h3 className="site-title">
        <Link className="shadow-none no-underline" to={`/`}>
          {siteTitle}
        </Link>
      </h3>
    );
  }
  return (
    <>
      <header className="w-full bg-brand-500 py-2">
        {showTitle && location.pathname !== rootPath && (
          <div className="max-w-xl mx-auto px-6 py-12">
            <h1 className="page-title">
              <span>{title}</span>
            </h1>
          </div>
        )}
      </header>
      <div className="mx-auto max-w-xl px-6 md:px-0 py-8 flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <footer className="self-center text-center text-gray-700">
          <nav>
            <div>{SiteTitle}</div>
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
    </>
  );
};

export default Layout;
