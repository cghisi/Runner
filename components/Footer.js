import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";

export const Footer = ({ backgroundColor }) => {
  return (
    <section className="bg-black text-white py-10 pb-64">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div>1</div>
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
