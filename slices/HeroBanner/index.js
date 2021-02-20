import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { Button } from "../../components/Button";

const MySlice = ({ slice }) => {
  return (
    <section
      style={{
        backgroundColor: slice.primary.background,
      }}
    >
      <div className="container mx-auto flex-none md:flex py-2 md:py-28">
        <div className="md:w-2/3 mx-5">
          {slice.primary.image && (
            <div className="text-left">
              <Image
                src={slice.primary.image.url}
                width={slice.primary.image.dimensions.width}
                height={slice.primary.image.dimensions.height}
                className="mx-auto"
              />
            </div>
          )}
        </div>
        <div className="md:w-1/3 my-5 md:my-auto mx-5 text-center md:text-left">
          {slice.primary.title && (
            <div className="py-10 font-medium">
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

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
