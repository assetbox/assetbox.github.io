import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '7be'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '317'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '56d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'add'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '321'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '895'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '8a0'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'c5e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '94b'),
    routes: [
      {
        path: '/docs/category/duplicated-assets-guide',
        component: ComponentCreator('/docs/category/duplicated-assets-guide', '497'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/category/icon-build',
        component: ComponentCreator('/docs/category/icon-build', '5da'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/coverage',
        component: ComponentCreator('/docs/coverage', 'a95'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/duplicated-assets-guide/add-new-file',
        component: ComponentCreator('/docs/duplicated-assets-guide/add-new-file', '532'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/duplicated-assets-guide/already-exists',
        component: ComponentCreator('/docs/duplicated-assets-guide/already-exists', 'f2c'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/getting-started',
        component: ComponentCreator('/docs/getting-started', '8a7'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/how-do-it-work',
        component: ComponentCreator('/docs/how-do-it-work', 'f51'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/icon-build/svg-to-react-component',
        component: ComponentCreator('/docs/icon-build/svg-to-react-component', '5d2'),
        exact: true,
        sidebar: "docsSidebar"
      },
      {
        path: '/docs/static-build',
        component: ComponentCreator('/docs/static-build', 'c55'),
        exact: true,
        sidebar: "docsSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '118'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
