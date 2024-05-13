import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas';

const config = defineConfig({
  title: 'Next Sanity Acquintance',
  projectId: 'v6zao00m',
  dataset: 'production',
  apiVersion: '2024-05-09',
  basePath: '/admin',
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});

export default config;
