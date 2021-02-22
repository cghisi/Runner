import React from "react";
import { PropTypes } from "prop-types";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

const MySlice = ({ slice, background, columns }) => {
  let bgColor = slice.primary.background;
  if (background) {
    bgColor = background;
  }

  let displayColumns = "md:grid-cols-3";
  if (columns) {
    displayColumns = `md:grid-cols-${columns}`;
  }

  return (
    <section
      style={{
        backgroundColor: bgColor,
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
          <div
            className={[
              `grid mx-10 md:mx-5 gap-20 md:my-10`,
              displayColumns,
            ].join(" ")}
          >
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
                  <div className="m-5 text-2xl font-medium">
                    <RichText render={item.title} />
                  </div>
                )}
                {item.description && (
                  <div className="mx-10">
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
};

export default MySlice;
