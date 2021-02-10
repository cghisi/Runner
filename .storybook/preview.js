import "../styles/globals.css";

import * as nextImage from "next/image";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

// Replace next/image for Storybook
Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    const { width, height } = props;
    const ratio = (height / width) * 100;
    return <img {...props} />;
  },
});
