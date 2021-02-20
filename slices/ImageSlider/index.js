import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Slider from "react-slick";
import Image from "next/image";

import { Button } from "../../components/Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RichText } from "prismic-reactjs";

const SliderNav = ({ data }) => {
  return (
    <div className="py-5">
      <button onClick={data.previous} className="px-2 inline-block">
        <Image src="/left.png" alt="previous image" width={30} height={30} />
      </button>
      <button onClick={data.next} className="px-2 inline-block">
        <Image src="/right.png" alt="next image" width={30} height={30} />
      </button>
    </div>
  );
};

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
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    let slice = this.props.slice;

    return (
      <section className="container mx-auto text-center py-20">
        <div className="md:flex">
          <div className="md:w-1/3 m-auto text-center md:text-left px-5">
            {slice.primary.title && (
              <div className="md:text-left">
                <RichText render={slice.primary.title} />
              </div>
            )}
            <div className="hidden md:block">
              <SliderNav data={this} />
            </div>
            {slice.primary.ctaCaption && (
              <div className="py-5">
                <Button primary size="small" label={slice.primary.ctaCaption} />
              </div>
            )}
          </div>
          <div className="md:w-2/3 md:ml-10 py-5">
            {slice.items && (
              <Slider ref={(c) => (this.slider = c)} {...settings}>
                {slice.items.map((item, index) => (
                  <div key={index} className="px-2 md:text-left">
                    {item.image && (
                      <Image
                        src={item.image.url}
                        height={item.image.dimensions.height}
                        width={item.image.dimensions.width}
                        alt={item.image.alt}
                      />
                    )}
                    {item.image && (
                      <div className="underline pb-5">
                        <RichText render={item.title} />
                      </div>
                    )}
                    {item.description && <RichText render={item.description} />}
                    {item.ctaCaption && (
                      <div className="md:text-left py-5">
                        <Button size="small" label={item.ctaCaption} />
                      </div>
                    )}
                  </div>
                ))}
              </Slider>
            )}
          </div>
          <div className="block md:hidden">
            <SliderNav data={this} />
          </div>
        </div>
      </section>
    );
  }
}

MySlice.propTypes = {};

MySlice.defaultProps = {};

export default MySlice;
