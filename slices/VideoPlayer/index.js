import React from "react";
import { array, shape, PropTypes } from "prop-types";
import { RichText } from "prismic-reactjs";

import ReactPlayer from "react-player";

const MySlice = ({ wide, slice }) => {
  if (slice.primary.video.embed_url) {
    var video = slice.primary.video.embed_url;
  } else {
    var video = slice.primary.video;
  }

  return (
    <section
      style={{
        backgroundColor: slice.primary.background,
      }}
    >
      <div className="container mx-auto text-center py-20">
        {slice.primary.title && (
          <div className="text-center mb-20">
            <RichText render={slice.primary.title} />
          </div>
        )}
        {slice.primary.description && (
          <div className="text-center my-5">
            <RichText render={slice.primary.description} />
          </div>
        )}
        {slice.primary.video && (
          <div>
            <ReactPlayer
              url={video}
              className="mx-auto react-player"
              controls={false}
              playing={true}
              muted={true}
              pip={false}
              width="1000px"
              height="560px"
              loop={true}
            />
          </div>
        )}
      </div>
    </section>
  );
};

// MySlice.propTypes = {
//   slice: shape({
//     primary: shape({
//       title: array.isRequired,
//     }).isRequired,
//   }).isRequired,
// };

MySlice.propTypes = {
  wide: PropTypes.bool,
};

MySlice.defaultProps = {
  wide: false,
};

export default MySlice;
