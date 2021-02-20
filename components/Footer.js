import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";

import Navigation from "./Navigation";

export const Footer = ({ backgroundColor, menu }) => {
  return (
    <footer
      className="text-white py-10 pb-64"
      style={
        menu
          ? { backgroundColor: "#000" }
          : { backgroundColor: backgroundColor }
      }
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h4 className="font-medium">Menu</h4>
            {menu ? (
              <ul className="text-white py-2">
                <Navigation
                  menuLinks={menu.data.menu_links}
                  direction="block"
                />
              </ul>
            ) : (
              <ul className="text-white py-2">
                <li className="mx-5 py-2">
                  <NextLink href={"/"} passHref>
                    <a>Element 1</a>
                  </NextLink>
                </li>
                <li className="mx-5 py-2">
                  <NextLink href={"/"} passHref>
                    <a>Element 2</a>
                  </NextLink>
                </li>
              </ul>
            )}
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  backgroundColor: PropTypes.string,
};

Footer.defaultProps = {
  backgroundColor: "#000",
};
