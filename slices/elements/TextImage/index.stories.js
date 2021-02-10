import Component from "./";
import model from "./model";
import mocks from "./mocks.json";
import { storiesOf } from "@storybook/react";

// import "../../styles/globals.css";

mocks.forEach((variation) => {
  storiesOf(model.name, Component)
    .addParameters({ component: Component })
    .add(variation.name, (args) => <Component slice={variation} {...args} />);
});
