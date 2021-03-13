import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";

import { Button } from "../../components/Button";

const MySlice = ({ slice, background }) => {
  let bgColor = slice.primary.background;
  if (background) {
    bgColor = background;
  }

  return (
    <section
      style={{
        backgroundColor: bgColor,
      }}
      className="py-10"
    >
      <div className="container mx-auto text-center md:w-1/2 my-20 px-5">
        {slice.primary.title && (
          <div className="mb-20">
            <RichText render={slice.primary.title} />
          </div>
        )}
        {slice.primary.description && (
          <div className="pb-10">
            <RichText render={slice.primary.description} />
          </div>
        )}
        {slice.primary.ctaLabel && (
          <Button primary label={slice.primary.ctaLabel} />
        )}
      </div>
    </section>
  );
};

export default MySlice;
