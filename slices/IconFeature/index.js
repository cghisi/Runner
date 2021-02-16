import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

const MySlice = ({ slice }) => {
  console.log(slice);
  return (
    <section
      style={{
        backgroundColor: slice.primary.background,
      }}
    >
      <div className="container mx-auto py-28">
        {slice.primary.title ? (
          <RichText render={slice.primary.title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
        {slice.items && (
          <div className="grid grid-cols-2 gap-4 my-10">
            {slice.items.map((item, index) => (
              <div
                key={index}
                className="flex py-5 mr-32 border-b-2 border-blue-300 border-opacity-25"
              >
                {item.image && (
                  <div>
                    <Image
                      src={item.image.url}
                      width={item.image.dimensions.width}
                      height={item.image.dimensions.height}
                    />
                  </div>
                )}
                {item.caption && (
                  <div className="my-auto mx-5">
                    <RichText render={item.caption} />
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

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
