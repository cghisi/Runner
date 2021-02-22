import Component from ".";
import model from "./model";
import mocks from "./mocks.json";
import { storiesOf } from "@storybook/react";

mocks.forEach((variation) => {
  storiesOf(model.name, Component)
    .addParameters({ component: Component })
    .add(variation.name, (args) => <Component slice={variation} {...args} />, {
      argTypes: {
        slidesToShow: {
          description: "Change the number of slide in the carousel",
          control: {
            type: "select",
            options: [2, 3],
          },
        },
        autoplay: {
          description: "Enable/disable autoplay on your slides",
          type: "boolean",
        },
        dots: {
          description: "Enable/disable dots on your slides",
          type: "boolean",
        },
      },
    });
});
