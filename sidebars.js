/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    { 
      type: 'category',
      label: 'How to get a solution',
      link: {
        type: 'generated-index',
        title: 'How to get a solution',
        description: 'Request a demo and get an individual ready-to-go solution',
        slug: '/howto',
      },
      items: [
        'create-project',
        'demo',
        'commissioning'
      ],
    },
    'faq',
    'feedback'
  ],
};

module.exports = sidebars;
