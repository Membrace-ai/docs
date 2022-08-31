// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  noIndex: true,
  title: 'Membrace Docs',
  url: 'https://membrace.ai/',
  baseUrl: '/',
  projectName: 'docs',
  organizationName: 'membrace-ai',
  trailingSlash: false, 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://static.tildacdn.com/tild3633-6362-4534-a336-633434356434/favicon-2.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        style: 'dark',
        title: 'Membrace',
        /*logo: {
          alt: 'Membrace',
          src: 'https://doc-binary.s3.yandex.net/src/membrace/logo-dark.svg',
        },*/
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Membrace',
            items: [
              {
                label: 'About us',
                to: 'https://membrace.ai/about',
              },
              {
                label: 'Media',
                to: 'https://membrace.ai/media',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/membraceapi/',
              },
            ],
          },
          {
            title: 'Solutions',
            items: [
              {
                label: 'Text',
                to: 'https://membrace.ai/text',
              },
              {
                label: 'Image',
                to: 'https://membrace.ai/image',
              },
              {
                label: 'Video',
                to: 'https://membrace.ai/video',
              },
              {
                label: 'Audio',
                to: 'https://membrace.ai/audio',
              },
            ],
          },
          {
            title: 'Industries',
            items: [
              {
                label: 'E-commerce and Classifieds',
                to: 'https://membrace.ai/solutions/ecommerce',
              },
              {
                label: 'Online Communities',
                to: 'https://membrace.ai/solutions/online-communities',
              },
              {
                label: 'Dating Services',
                to: 'https://membrace.ai/solutions/dating',
              },
              {
                label: 'Gaming',
                to: 'https://membrace.ai/solutions/gaming',
              },
            ],
          },
          {
            title: 'Case Studies',
            items: [
              {
                label: 'A Marketplace',
                to: 'https://membrace.ai/case-studies/ecommerce',
              },
              {
                label: 'An Online Community',
                to: 'https://membrace.ai/case-studies/online-community',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
