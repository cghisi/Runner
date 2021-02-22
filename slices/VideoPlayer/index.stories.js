import Component from "./";
import model from "./model";
import mocks from "./mocks.json";
import { storiesOf } from "@storybook/react";

mocks.forEach((variation) => {
  storiesOf(model.name, Component)
    .addParameters({ component: Component })
    .add(variation.name, (args) => <Component slice={variation} {...args} />, {
      argTypes: {
        background: {
          description: "Select the background color",
          control: "color",
        },
        Autoplay: {
          description: "Enable/disable autoplay on your video",
          type: "boolean",
        },
        Loop: {
          description: "Enable/disable loop on your video",
          type: "boolean",
        },
      },
    });
});
