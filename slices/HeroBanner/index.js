import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { Button } from "../../components/Button";

const MySlice = ({ slice }) => (
  <section
    style={{
      backgroundColor: slice.primary.background,
    }}
  >
    <div className="container flex py-10">
      <div className="w-2/3">
        {slice.primary.image && (
          <div>
            <Image
              src={slice.primary.image.url}
              width={slice.primary.image.width}
              height={slice.primary.image.height}
              className="mx-auto"
            />
          </div>
        )}
      </div>
      <div className="w-1/3 m-auto">
        {slice.primary.title && (
          <div className="py-5">
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

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
