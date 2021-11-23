// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "React Hyper Scroller",
  tagline: "Hyper-fast virtual list for React web-apps",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "HorusGoul", // Usually your GitHub org/user name.
  projectName: "react-hyper-scroller-docs", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/HorusGoul/react-hyper-scroller-docs/edit/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "react-hyper-scroller",
        logo: {
          alt: "react-hyper-scroller's logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          {
            href: "https://github.com/HorusGoul/react-hyper-scroller",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/react-hyper-scroller",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/HorusGoul",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "horus.dev",
                to: "https://horus.dev",
              },
              {
                label: "GitHub",
                href: "https://github.com/HorusGoul/react-hyper-scroller",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} react-hyper-scroller. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
