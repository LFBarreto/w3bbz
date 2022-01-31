/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");
const runtimeCaching = require("./cache.js");

const nextConfig = {
  i18n,
  webpack5: true,
  pwa: {
    dest: "public",
    runtimeCaching,
    cacheOnFrontEndNav: true,
    fallbacks: {
      document: "/",
      image: "/images/offline.svg",
    },
  },
};

module.exports = withPWA(nextConfig);
