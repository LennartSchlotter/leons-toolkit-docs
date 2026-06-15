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
            'tools/modeling/clip-tool',
            'tools/modeling/merge-tool',
            'tools/modeling/dynamic-bevel',
            'tools/modeling/connect-edges',
            'tools/modeling/draw-shape',
            'tools/modeling/panel-maker',
            'tools/modeling/cable-generator',
            'tools/modeling/arch-tool',
            'tools/modeling/mirror-tool',
            'tools/modeling/mesh-edits',
            'tools/modeling/utilities',
          ],
        },
        {
          type: 'category',
          label: 'UV',
          items: [
            'tools/uv/blend-materials',
            'tools/uv/grid-ify',
            'tools/uv/fast-tex',
            'tools/uv/hotspot',
            'tools/uv/hotspot-atlas-editor',
          ],
        },
        {
          type: 'category',
          label: 'Vertex Paint',
          items: [
            'tools/vertex-paint/vertex-painter'
          ],
        },
        {
          type: 'category',
          label: 'Origins',
          items: [
            'tools/origins/interactive-origin-tool',
            'tools/origins/reset-basic',
            'tools/origins/reset-position',
            'tools/origins/reset-rotation',
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
