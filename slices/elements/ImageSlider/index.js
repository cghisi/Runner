import React, { Component } from "react";
import { array, shape, PropTypes } from "prop-types";
import Slider from "react-slick";
import Image from "next/image";

import { Button } from "../../components/Button";

import Right from "../../assets/right.png";
import Left from "../../assets/left.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RichText } from "prismic-reactjs";

class MySlice extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };

    let slice = this.props.slice;

    return (
      <section className="container mx-auto text-center">
        <div className="flex">
          <div className="w-1/3 m-auto">
            {slice.primary.title && (
              <div className="text-left">
                <RichText render={slice.primary.title} />
              </div>
            )}
            <div className="text-left py-5">
              <button onClick={this.previous} className="pr-5 inline-block">
                <img src={Left} alt="previous arrow" />
              </button>
              <button onClick={this.next} className="pr-5 inline-block">
                <img src={Right} alt="next arrow" />
              </button>
            </div>
            {slice.primary.ctaCaption && (
              <div className="text-left">
                <Button primary size="small" label={slice.primary.ctaCaption} />
              </div>
            )}
          </div>
          <div className="w-2/3 ml-10">
            {slice.items && (
              <Slider ref={(c) => (this.slider = c)} {...settings}>
                {slice.items.map((item, index) => (
                  <div key={index} className="px-2 text-left">
                    <Image
                      src={item.image.url}
                      height={300}
                      width={500}
                      alt={item.image.alt}
                    />
                    <div className="underline pb-5">
                      <RichText render={item.title} />
                    </div>
                    <RichText render={item.description} />
                    <div className="text-left py-5">
                      <Button size="small" label={item.ctaCaption} />
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </section>
    );
  }
}

MySlice.propTypes = {
  position: PropTypes.oneOf(["2", "3", "4"]),
  primary: PropTypes.bool,
};

MySlice.defaultProps = {
  position: "4",
  primary: true,
};

export default MySlice;
