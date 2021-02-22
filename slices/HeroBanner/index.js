import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { Button } from "../../components/Button";

import { structuredTextPropTypes, background } from "../../utils/prop-types";

const MySlice = ({ slice, background, position }) => {
  let bgColor = slice.primary.background;
  if (background) {
    bgColor = background;
  }

  let displayPosition = "flex-row";
  if (position == "Left") {
    displayPosition = "flex-row-reverse";
  }

  return (
    <section style={{ backgroundColor: bgColor }}>
      <div
        className={[
          `container mx-auto flex-none md:flex py-2 md:py-28 `,
          displayPosition,
        ].join(" ")}
      >
        <div className="md:w-2/3 mx-5">
          {slice.primary.image && (
            <div className="text-left">
              <Image
                src={slice.primary.image.url}
                width={slice.primary.image.dimensions.width}
                height={slice.primary.image.dimensions.height}
                className="mx-auto"
                alt={slice.primary.image.alt}
              />
            </div>
          )}
        </div>
        <div className="md:w-1/3 my-5 md:my-auto mx-5 text-center md:text-left">
          {slice.primary.title && (
            <div className="py-10 font-medium text-4xl md:text-6xl">
              <RichText render={slice.primary.title} />
            </div>
          )}
          {slice.primary.description && (
            <div className="py-5">
              <RichText render={slice.primary.description} />
            </div>
          )}
          {slice.primary.ctaLabel && (
            <Button primary label={slice.primary.ctaLabel} />
          )}
        </div>
      </div>
    </section>
  );
};

export default MySlice;
