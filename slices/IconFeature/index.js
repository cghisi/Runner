import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

const MySlice = ({ slice, background, columns }) => {
  let bgColor = slice.primary.background;
  if (background) {
    bgColor = background;
  }

  let displayColumns = "md:grid-cols-4";
  if (columns) {
    displayColumns = `md:grid-cols-${columns}`;
  }

  return (
    <section
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="container mx-auto py-20 px-5">
        {slice.primary.title && (
          <div className="text-center mb-20">
            <RichText render={slice.primary.title} />
          </div>
        )}
        {slice.items && (
          <div className={[`grid grid-cols-2 gap-4`, displayColumns].join(" ")}>
            {slice.items.map((item, index) => (
              <div key={index} className="py-5 text-center">
                {item.image && (
                  <div className="rounded-full border-black border-2 h-32 w-32 md:h-48 md:w-48 flex items-center justify-center bg-white mx-auto">
                    <Image
                      src={item.image.url}
                      width={item.image.dimensions.width}
                      height={item.image.dimensions.height}
                      alt={item.image.alt}
                    />
                  </div>
                )}
                {item.caption && (
                  <div className="m-5 font-medium">
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

export default MySlice;
