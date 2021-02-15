const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "next-slicezone",
  "essential-slices",
]);

module.exports = withPlugins([withTM], {
  images: {
    domains: ["images.prismic.io"],
  },
});
