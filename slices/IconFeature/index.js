import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

const MySlice = ({ slice }) => {
  return (
    <section
      style={{
        backgroundColor: slice.primary.background,
      }}
    >
      <div className="container mx-auto py-20">
        {slice.primary.title && (
          <div className="text-center mb-20">
            <RichText render={slice.primary.title} />
          </div>
        )}
        {slice.items && (
          <div className="grid grid-cols-4 gap-4">
            {slice.items.map((item, index) => (
              <div key={index} className="py-5 text-center">
                {item.image && (
                  <div className="rounded-full border-black border-2 h-48 w-48 flex items-center justify-center bg-white mx-auto">
                    <Image
                      src={item.image.url}
                      width={item.image.dimensions.width}
                      height={item.image.dimensions.height}
                      alt="SEO to add"
                    />
                  </div>
                )}
                {item.caption && (
                  <div className="m-5">
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
