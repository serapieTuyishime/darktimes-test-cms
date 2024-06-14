import { defineConfig, isDev } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial'
import { vercelDeployTool } from "sanity-plugin-vercel-deploy"
const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'darktimes',

  projectId: 'equ70bdz',
  dataset: 'production',

  plugins: [vercelDeployTool(), structureTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

