import { Component } from "react";
import Image from "next/image";

import React from "react";
import { RichText } from "prismic-reactjs";
import Link from "./DocLink";

class MobileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
  render() {
    const { isExpanded } = this.state;
    const menu = this.props.menu.data.menu_links;
    const altLangs = this.props.altLangs;
    return (
      <div>
        <button
          id="nav-toggle"
          className="flex items-center px-5 py-2 hover:text-white"
          onClick={(e) => this.handleToggle(e)}
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <nav className={`${isExpanded ? "flex" : "hidden"}`}>
          <aside className="transform top-0 left-0 w-3/4 bg-white fixed h-full overflow-auto ease-in-out z-30">
            <div
              className="flex w-full items-center p-4 border-b"
              onClick={(e) => this.handleToggle(e)}
            >
              <span className="w-1/2"></span>
              <span className="w-1/2 text-right">
                <Image
                  src="/close.svg"
                  alt="Close Menu"
                  width={20}
                  height={20}
                />
              </span>
            </div>

            {menu.map((menuLink, index) => (
              <span
                className="flex items-center p-4 text-medium hover:bg-indigo-500 border-gray-300 border-b"
                key={index}
              >
                <Link link={menuLink.link}>
                  {RichText.asText(menuLink.label)}
                </Link>
              </span>
            ))}
            <span className="flex items-center p-4 hover:bg-indigo-500 border-gray-300 border-b text-medium ">
              <a>Join Now</a>
            </span>
          </aside>
        </nav>
      </div>
    );
  }
}

export default MobileNavigation;
