import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";

import Navigation from "./Navigation";

export const Footer = ({ backgroundColor, menu }) => {
  return (
    <section className="bg-black text-white py-10 pb-64">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h4 className="font-bold">Menu</h4>
            {menu ? (
              <ul className="text-white py-5">
                <Navigation
                  menuLinks={menu.data.menu_links}
                  direction="block"
                />
              </ul>
            ) : (
              <ul>
                <li className="mr-6">
                  <NextLink href={"/"} passHref>
                    <a>Element 1</a>
                  </NextLink>
                </li>
                <li className="mr-6">
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
    </section>
  );
};

Footer.propTypes = {
  backgroundColor: PropTypes.string,
};

Footer.defaultProps = {
  backgroundColor: "#DDE6EC",
};
