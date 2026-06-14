import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// These are placeholders as the doc structure has not been decided yet
// TODO update to match docs
const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/interface',
        'getting-started/preferences',
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      collapsed: false,
      items: [
        'tools/overview',
        {
          type: 'category',
          label: 'Modeling',
          items: [
            'tools/modeling/scale-cage',
            'tools/modeling/arch-tool',
            'tools/modeling/draw-shape',
            'tools/modeling/clip-tool',
            'tools/modeling/mirror-system',
            'tools/modeling/cable-generator',
          ],
        },
        {
          type: 'category',
          label: 'Texturing',
          items: [
            'tools/texturing/fast-texturing',
            'tools/texturing/world-aligned',
            'tools/texturing/hotspot-editor',
          ],
        },
        {
          type: 'category',
          label: 'Utilities',
          items: [
            'tools/utilities/origin-snapping',
            'tools/utilities/circle-scatter',
            'tools/utilities/lod-groups',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      collapsed: true,
      items: [
        'workflows/hard-surface',
        'workflows/environment-art',
        'workflows/optimization',
      ],
    },
    'changelog',
    'faq',
    'troubleshooting',
  ],
};

export default sidebars;
