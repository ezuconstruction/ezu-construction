import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seoTitle: z.string().optional(), // shorter title for search results when the headline runs long
      description: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      category: z.enum(['Costs', 'Planning', 'Permits and rules', 'Design', 'Suites and units', '装修指南']),
      image: image(),
      imageAlt: z.string(),
      imageCaption: z.string().optional(),
      services: z.array(z.string()).default([]),
      lang: z.enum(['en', 'zh']).default('en'),
      translation: z.string().optional(), // id of the same article in the other language
      apply: z.object({ label: z.string(), url: z.string().url() }).optional(), // official application link, shown as a big button
    }),
});

export const collections = { journal };
