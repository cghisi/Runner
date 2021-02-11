import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";

import Navigation from "./Navigation";
//import LanguageSwitcher from "./LanguageSwitcher";
//import MobileNavigation from "./MobileNavigation";

export const Header = ({ backgroundColor, menu, altLangs }) => {
  return (
    <header
      style={
        menu
          ? { backgroundColor: menu.data.background }
          : { backgroundColor: backgroundColor }
      }
    >
      <div className="flex container mx-auto">
        <div className="md:hidden justify-end items-center py-6 w-1/3">
          {/* <MobileNavigation altLangs={altLangs} menu={menu} /> */}
        </div>
        <div className="flex items-center py-6 sm:w-1/3 md:w-1/5">
          <NextLink href={"/"} passHref>
            <a className="logo text-2xl font-bold">RUNNER</a>
          </NextLink>
        </div>
        <div className="hidden md:flex justify-center items-center py-6 md:w-3/5 sm:w-1/3">
          {menu ? (
            <ul>
              <Navigation menuLinks={menu.data.menu_links} />
            </ul>
          ) : (
            <ul>
              <li className="mr-6 inline-block">
                <a href="#">Element 1</a>
              </li>
              <li className="mr-6 inline-block">
                <a href="#">Element 2</a>
              </li>
            </ul>
          )}
          {/* <LanguageSwitcher altLangs={altLangs} /> */}
        </div>
        <div className="hidden md:flex justify-end items-center py-6 md:w-1/5 sm:w-1/3">
          Login
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  backgroundColor: PropTypes.string,
};

Header.defaultProps = {
  backgroundColor: "#DDE6EC",
};
