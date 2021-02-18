import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

const MySlice = ({ slice }) => (
  <section
    style={{
      backgroundColor: slice.primary.background,
    }}
  >
    <div className="container py-20 mx-auto">
      {slice.primary.title && (
        <div className="text-center mb-20">
          <RichText render={slice.primary.title} />
        </div>
      )}
      {slice.primary.description && (
        <div className="text-center">
          <RichText render={slice.primary.description} />
        </div>
      )}
      {slice.items && (
        <div className="grid grid-cols-3 gap-20 my-10">
          {slice.items.map((item, index) => (
            <div
              key={index}
              className="border-black border-2 bg-white text-center py-10"
            >
              {item.image && (
                <Image
                  src={item.image.url}
                  width={item.image.dimensions.width}
                  height={item.image.dimensions.height}
                  className="mx-auto"
                />
              )}
              {item.title && (
                <div className="m-5 text-2xl font-bold">
                  <RichText render={item.title} />
                </div>
              )}
              {item.description && (
                <div className="mx-20">
                  <RichText render={item.description} />
                </div>
              )}
            </div>
          ))}
        </div>
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
