/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'How to get a solution',
      collapsed: false,
      link: {type: 'doc', id: 'index'},
      items: ['demo', 'commissioning'],
    },
    'faq',
    'feedback'
  ],
};

module.exports = sidebars;
