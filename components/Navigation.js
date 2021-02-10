import React from "react";
import { RichText } from 'prismic-reactjs'
import DocLink from "./DocLink"

const Navbar = ({ menuLinks = [] }) => (
    <header className="site-header">
      <Links menuLinks={menuLinks} />
    </header>
);

const Links = ({menuLinks}) => {
  if (menuLinks) {
    return (
      <nav>
        <ul>
          {menuLinks.map((menuLink, index) => (
            <li key={`menulink-${index}`}>
              <DocLink link={menuLink.link}>
                {RichText.asText(menuLink.label)}
              </DocLink>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
  return null
}

export default Navbar;