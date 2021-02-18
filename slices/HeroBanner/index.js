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
      <div className="container mx-auto flex py-28">
        <div className="w-2/3">
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
        <div className="w-1/3 my-auto text-left">
          {slice.primary.title && (
            <div className="py-10 font-bold">
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
