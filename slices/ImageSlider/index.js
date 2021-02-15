import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Slider from "react-slick";
import Image from "next/image";

import { Button } from "../../components/Button";

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
      <section className="container mx-auto text-center py-20">
        <div className="flex">
          <div className="w-1/3 m-auto">
            {slice.primary.title && (
              <div className="text-left">
                <RichText render={slice.primary.title} />
              </div>
            )}
            <div className="text-left py-5">
              <button onClick={this.previous} className="pr-5 inline-block">
                <Image
                  src="/left.png"
                  alt="previous image"
                  width={30}
                  height={30}
                />
              </button>
              <button onClick={this.next} className="pr-5 inline-block">
                <Image
                  src="/right.png"
                  alt="next image"
                  width={30}
                  height={30}
                />
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
                    {item.image && (
                      <Image
                        src={item.image.url}
                        height={item.image.dimensions.height}
                        width={item.image.dimensions.width}
                        alt={item.image.alt}
                      />
                    )}
                    <div className="underline pb-5">
                      <RichText render={item.title} />
                    </div>
                    {item.description && (
                      <RichText render={item.description} />
                    )}
                    {item.ctaCaption && (
                      <div className="text-left py-5">
                        <Button size="small" label={item.ctaCaption} />
                      </div>
                    )}
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

MySlice.propTypes = {};

MySlice.defaultProps = {};

export default MySlice;
