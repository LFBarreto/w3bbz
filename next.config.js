/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");

const nextConfig = {
  i18n,
  webpack5: true,
  pwa: {
    dest: "public",
  },
};

module.exports = withPWA(nextConfig);
