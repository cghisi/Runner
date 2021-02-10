import React from "react";
import { array, shape, PropTypes } from "prop-types";
import Image from "next/image";

import { Button } from "../../components/Button";

import { RichText } from "prismic-reactjs";

export const MySlice = ({ slice, position, primary }) => {
  const divPosition =
    position == "left" && "flex-col-reverse md:flex-row-reverse";

  return (
    <section className="container mx-auto text-center">
      <div className={["flex flex-col md:flex-row", divPosition].join(" ")}>
        <div className="md:w-1/2 m-auto text-center md:text-left max-w-md">
          {slice.primary.title && (
            <div className="my-10">
              <RichText render={slice.primary.title} />
            </div>
          )}
          {slice.primary.description && (
            <RichText render={slice.primary.description} />
          )}
          {slice.primary.ctaLink && (
            <div className="my-10">
              <Button primary size="small" label={slice.primary.ctaLabel} />
            </div>
          )}
        </div>
        <div className="md:w-1/2">
          {slice.primary.image && (
            <Image
              src={slice.primary.image.url}
              height={800}
              width={500}
              alt={slice.primary.alt}
              className="mx-auto"
            />
          )}
        </div>
      </div>
    </section>
  );
};

MySlice.propTypes = {
  position: PropTypes.oneOf(["left", "right"]),
};

MySlice.defaultProps = {
  position: "right",
};

export default MySlice;
