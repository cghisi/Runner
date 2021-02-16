import React from "react";
import { RichText } from "prismic-reactjs";
import Link from "./DocLink";

const Navbar = ({ menuLinks = [] }) => (
  <header className="site-header">
    <Links menuLinks={menuLinks} />
  </header>
);

const Links = ({ menuLinks }) => {
  if (menuLinks) {
    return (
      <nav>
        <ul>
          {menuLinks.map((menuLink, index) => (
            <li
              className="mr-6 inline-block text-black link-navigation"
              key={`menulink-${index}`}
            >
              <Link link={menuLink.link}>
                {RichText.asText(menuLink.label)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  return null;
};

export default Navbar;
