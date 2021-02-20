import React from "react";
import { RichText } from "prismic-reactjs";
import Link from "./DocLink";

const Navbar = ({ menuLinks = [], direction }) => (
  <Links menuLinks={menuLinks} direction={direction} />
);

const Links = ({ menuLinks, direction }) => {
  if (menuLinks) {
    return (
      <ul className={direction}>
        {menuLinks.map((menuLink, index) => (
          <li
            className="mx-5 link-navigation hover:text-gray-500 py-1"
            key={`menulink-${index}`}
          >
            <Link link={menuLink.link}>{RichText.asText(menuLink.label)}</Link>
          </li>
        ))}
      </ul>
    );
  }
  return null;
};

export default Navbar;
