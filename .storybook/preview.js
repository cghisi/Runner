import "../styles/globals.css";

import * as nextImage from "next/image";

const customViewports = {
  iphone: {
    name: "Iphone",
    styles: {
      width: "414px",
      height: "896px",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1440px",
      height: "900px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  viewport: { viewports: customViewports },
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
