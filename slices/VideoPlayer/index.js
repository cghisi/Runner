import React from "react";
import { array, shape, PropTypes } from "prop-types";
import { RichText } from "prismic-reactjs";

import ReactPlayer from "react-player";

const MySlice = ({ wide, slice }) => {
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
      {slice.primary.video && (
        <div className="player-wrapper">
          <ReactPlayer
            url={slice.primary.video}
            className="mx-auto react-player"
            width="100%"
            height="100%"
            controls="false"
            playing="true"
            muted="true"
            pip="false"
          />
        </div>
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
  wide: PropTypes.bool,
};

MySlice.defaultProps = {
  wide: false,
};

export default MySlice;
