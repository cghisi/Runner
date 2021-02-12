import React from "react";
import { array, shape, PropTypes } from "prop-types";
import { RichText } from "prismic-reactjs";

import ReactPlayer from "react-player";

const MySlice = ({ video, slice }) => {
  
  const videoUrl = video;

  return (
    <section className="container mx-auto text-center">
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
      {slice.primary.description ? (
        <RichText render={slice.primary.description} />
      ) : (
        <p>start by editing this slice from inside the SliceMachine builder!</p>
      )}
      {slice.primary.video ? (
        <ReactPlayer url={videoUrl} className="mx-auto" />
      ) : (
        <ReactPlayer url={slice.primary.video} />
      )}
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
  video: PropTypes.string.isRequired,
};

MySlice.defaultProps = {
  video: "https://www.youtube.com/watch?v=2vYUkHWZeT4",
};

export default MySlice;
