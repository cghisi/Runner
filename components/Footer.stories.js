import React from "react";

import { Footer } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
