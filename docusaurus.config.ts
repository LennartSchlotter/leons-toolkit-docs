import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Leon's Modeling Toolkit",
  tagline: "Leon's Modeling Toolkit",
  favicon: '/img/LeonMTKIcon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  // TODO
  url: 'https://lennartschlotter.github.io', //FIXME
  baseUrl: '/leons-toolkit-docs/', //Pot FIXME, has to match github repo name
  organizationName: 'lennartschlotter', //FIXME
  projectName: 'leons-modeling-toolkit',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/LeonMTKLogo.png', //TODO replace with social card (preview on social media)
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: { //TODO this can be updated over time
      id: 'v2_release',
      content: 'Leon\'s Modeling Toolkit <strong>2.0</strong> is out - <a href="https://3leon.gumroad.com/l/LeonsModelingToolkit" target="_blank">get it on Gumroad</a>',
      backgroundColor: '#05061a',
      textColor: '#a0b4ff',
      isCloseable: true,
    },
    navbar: {
      title: "Leon's Modeling Toolkit",
      logo: {
        alt: 'LMT Logo',
        src: 'img/LeonMTKLogo.png', //TODO a little small
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',  // must match the key in sidebars.ts
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docsVersionDropdown', // version picker - shows once we have versions, can we "simulate" that
          position: 'right',
        },
        {
          href: 'https://discord.com/invite/2sz2xy4srU',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://3leon.gumroad.com/l/LeonsModelingToolkit',
          label: 'Buy - $10',
          position: 'right',
          className: 'navbar-cta-button',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Getting Started', to: '/docs/getting-started/installation' },
            { label: 'Tools', to: '/docs/tools/overview' },
            { label: 'Changelog', to: '/docs/changelog' },
          ],
        },
        {
          title: 'Support',
          items: [
            { label: 'FAQ', to: '/docs/faq' },
            { label: 'Troubleshooting', to: '/docs/troubleshooting' },
            { label: 'Discord', href: 'https://discord.com/invite/2sz2xy4srU' },
          ],
        },
        {
          title: 'Links',
          items: [
            { label: 'Gumroad', href: 'https://3leon.gumroad.com/l/LeonsModelingToolkit' },
            { label: 'Twitter / X', href: 'https://x.com/_3Leon' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Leôn (_3Leon). Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
