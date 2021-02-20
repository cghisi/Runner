import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";

import { Button } from "../../components/Button";

const MySlice = ({ slice }) => (
  <section className="container mx-auto text-center md:w-1/2 my-20">
    <div className="px-5">
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

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
