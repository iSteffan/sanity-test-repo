import { defineConfig } from 'sanity';
// import { visionTool } from '@sanity/vision';
// import { schemaTypes } from './schemaTypes';
import { structureTool } from 'sanity/structure';
// import project from './sanity/schemas/project-schema';
import schemas from './sanity/schemas';

const config = defineConfig({
  name: 'default',
  title: 'Next Sanity Acquintance',

  projectId: 'v6zao00m',
  dataset: 'production',

  // plugins: [structureTool(), visionTool()],
  plugins: [structureTool()],

  apiVersion: '2024-05-09',

  basePath: '/admin',

  schema: {
    types: schemas,
  },
});

export default config;
