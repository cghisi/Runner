import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";

import Navigation from "./Navigation";

export const Newsletter = () => {
  return (
    <div className="md:w-2/4 my-5">
      <h3 className="font-medium">Newsletter</h3>
      <div className="py-2">
        <p>Hi, suscribe to our newsletter and stay inform about our company</p>
        <input
          type="text"
          placeholder="Enter your email"
          className="my-3 p-3 rounded-sm text-black md:w-3/4"
        />
        <button
          type="submit"
          className="md:mx-2 px-5 py-4 rounded-sm bg-black hover:bg-white hover:text-black"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export const Social = () => {
  return (
    <div className="md:w-1/4 my-5">
      <h3>Social</h3>
      <ul className="text-white py-3">
        <li className="mx-5 py-1">
          <NextLink href={"/"} passHref>
            <a>Twitter</a>
          </NextLink>
        </li>
        <li className="mx-5 py-1">
          <NextLink href={"/"} passHref>
            <a>Facebook</a>
          </NextLink>
        </li>
        <li className="mx-5 py-1">
          <NextLink href={"/"} passHref>
            <a>Instagram</a>
          </NextLink>
        </li>
      </ul>
    </div>
  );
};

export const Footer = ({ backgroundColor, menu }) => {
  return (
    <footer
      className="text-white py-10 pb-32"
      style={
        menu
          ? { backgroundColor: "#313942" }
          : { backgroundColor: backgroundColor }
      }
    >
      <div className="container mx-auto">
        <div className="md:flex mx-5">
          <div className="md:w-1/4 my-5">
            <h3 className="font-medium">Menu</h3>
            {menu ? (
              <ul className="text-white py-3 font-normal">
                <Navigation
                  menuLinks={menu.data.menu_links}
                  direction="block"
                />
              </ul>
            ) : (
              <ul className="text-white py-3">
                <li className="mx-5 link-navigation hover:text-gray-500 py-1">
                  <NextLink href={"/"} passHref>
                    <a>Element 1</a>
                  </NextLink>
                </li>
                <li className="mx-5 link-navigation hover:text-gray-500 py-1">
                  <NextLink href={"/"} passHref>
                    <a>Element 2</a>
                  </NextLink>
                </li>
              </ul>
            )}
          </div>
          <Social />
          <Newsletter />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  backgroundColor: PropTypes.string,
};

Footer.defaultProps = {
  backgroundColor: "#313942",
};
