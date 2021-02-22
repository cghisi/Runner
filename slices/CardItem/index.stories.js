import Component from "./";
import model from "./model";
import mocks from "./mocks.json";
import { storiesOf } from "@storybook/react";

// mocks.forEach((variation) => {
//   storiesOf(model.name, Component)
//     .addParameters({ component: Component })
//     .add(variation.name, (args) => <Component slice={variation} {...args} />);
// });

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
          description: "Change the number of columns for your cards",
          control: {
            type: "select",
            options: ["1", "2", "3"],
          },
        },
      },
    });
});
