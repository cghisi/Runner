import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

export const Header = ({ backgroundColor, menu }) => {
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
          <MobileNavigation menu={menu} />
        </div>
        <div className="flex items-center py-6 w-1/3 md:w-1/5">
          <NextLink href={"/"} passHref>
            <a className="logo text-2xl font-bold mx-auto md:mx-0">RUNNER</a>
          </NextLink>
        </div>
        <div className="hidden md:flex justify-center items-center py-6 md:w-3/5 sm:w-1/3">
          {menu ? (
            <div className="inline-flex font-medium main-navigation">
              <Navigation
                menuLinks={menu.data.menu_links}
                direction="inline-flex"
              />
            </div>
          ) : (
            <ul>
              <li className="mr-6 inline-block">
                <NextLink href={"/"} passHref>
                  <a>Element 1</a>
                </NextLink>
              </li>
              <li className="mr-6 inline-block">
                <NextLink href={"/"} passHref>
                  <a>Element 2</a>
                </NextLink>
              </li>
            </ul>
          )}
          {/* <LanguageSwitcher altLangs={altLangs} /> */}
        </div>
        <div className="hidden md:flex justify-end items-center py-6 md:w-1/5 sm:w-1/3 font-medium hover:text-gray-500">
          <NextLink href={"/"} passHref>
            <a>Login</a>
          </NextLink>
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
