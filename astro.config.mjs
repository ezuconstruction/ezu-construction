import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

// Guide images written as ![alt](src "Caption") become <figure> with a <figcaption>.
const figureCaptions = {
  name: 'figure-captions',
  element: {
    filter: ['p'],
    visit(node, ctx) {
      const kids = node.children.filter((k) => !(k.type === 'text' && !k.value.trim()));
      const img = kids[0];
      if (kids.length !== 1 || img.type !== 'element' || img.tagName !== 'img' || !img.properties?.title) return;
      const { title, ...properties } = img.properties;
      ctx.replaceNode(node, {
        type: 'element', tagName: 'figure', properties: {},
        children: [{ ...img, properties }, { type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: String(title) }] }],
      });
    },
  },
};

export default defineConfig({
  site: 'https://ezuconstruction.ca',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  compressHTML: true,
  // Markdown images in the guides get a srcset, so phones download a phone-sized file
  image: { layout: 'constrained', responsiveStyles: false },
  markdown: { processor: satteri({ hastPlugins: [figureCaptions] }) },
});
