import { defineConfig } from 'sanity';
// import { structureTool } from 'sanity/structure';
// import { visionTool } from '@sanity/vision';
// import { schemaTypes } from './schemaTypes';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  name: 'default',
  title: 'Next Sanity Acquintance',

  projectId: 'v6zao00m',
  dataset: 'production',

  // plugins: [structureTool(), visionTool()],
  plugins: [deskTool()],

  apiVersion: '2024-05-09',

  basePath: '/admin',

  // schema: {
  //   types: schemaTypes,
  // },
});

export default config;
