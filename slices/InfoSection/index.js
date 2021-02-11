import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";

import { Button } from "../../components/Button";

const MySlice = ({ slice }) => (
  <section className="container mx-auto text-center w-1/2">
    {slice.primary.title && (
      <div className="py-5">
        <RichText render={slice.primary.title} />
      </div>
    )}
    {slice.primary.description && (
      <div className="py-10">
        <RichText render={slice.primary.description} />
      </div>
    )}
    {slice.primary.ctaLabel && (
      <Button primary label={slice.primary.ctaLabel} />
    )}
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
