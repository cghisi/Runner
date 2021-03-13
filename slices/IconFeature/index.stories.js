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
        columns: {
          description: "Change your column setting (2-6)",
          control: {
            type: "select",
            options: ["2", "4", "6"],
          },
        },
      },
    });
});
