// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

const isProd = process.env.NODE_ENV === "production";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "React Hyper Scroller",
  tagline: "Hyper-fast virtual list for React",
  url: "https://react-hyper-scroller.horus.dev",
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
            "https://github.com/HorusGoul/react-hyper-scroller-docs/edit/main/",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        pages: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
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
            label: "Docs",
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
                label: "Getting Started",
                to: "/docs/intro",
              },
              {
                label: "Props",
                to: "/docs/props",
              },
              {
                label: "Items with fixed size",
                to: "/docs/static-lists",
              },
              {
                label: "Items with dynamic size",
                to: "/docs/dynamic-lists",
              },
              {
                label: "Scroll Restoration",
                to: "/docs/advanced-features/scroll-restoration",
              },
              {
                label: "Scroll to Item",
                to: "/docs/advanced-features/scroll-to-item",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Forum & Support",
                href: "https://github.com/HorusGoul/react-hyper-scroller/discussions",
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
                label: "GitHub",
                href: "https://github.com/HorusGoul/react-hyper-scroller",
              },
              {
                label: "Stats",
                href: "https://plausible.io/react-hyper-scroller.horus.dev",
              },
              {
                label: "horus.dev",
                href: "https://horus.dev",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Horus Lugo. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  scripts: [
    isProd && {
      src: "/spycat/js/script.js",
      defer: true,
      "data-domain": "react-hyper-scroller.horus.dev",
      "data-api": "/spycat/api/event",
    },
  ].filter(Boolean),
};

module.exports = config;
