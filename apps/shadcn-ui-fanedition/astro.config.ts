import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    customCss: ['/src/styles/tailwind.docs.css'],
    title: 'ShadcnUI FE ',
    social: {
      github: 'https://github.com/tigawanna/shadcn-ui-fanedition'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), react()]
});
