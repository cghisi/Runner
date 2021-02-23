import React from "react";
import { array, shape, PropTypes } from "prop-types";
import { RichText } from "prismic-reactjs";

import ReactPlayer from "react-player";

const MySlice = ({ slice, autoplay, loop, background }) => {
  let bgColor = slice.primary.background;
  if (background) {
    bgColor = background;
  }

  let video = slice.primary.video;
  if (slice.primary.video.embed_url) {
    video = slice.primary.video.embed_url;
  }

  let loopVideo = true;
  if (loop) {
    loopVideo = loop;
  }

  let autoplayVideo = true;
  if (loop) {
    autoplayVideo = autoplay;
  }

  return (
    <section
      style={{
        backgroundColor: bgColor,
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
          <div className="player-wrapper mx-5">
            <ReactPlayer
              url={video}
              className="react-player"
              controls={false}
              playing={autoplayVideo}
              muted={true}
              width="100%"
              height="100%"
              loop={loopVideo}
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

export default MySlice;
