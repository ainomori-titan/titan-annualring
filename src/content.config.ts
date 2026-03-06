import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const rings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/rings' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['年輪', '根系觀察', '枝葉日記', '果實']).default('年輪'),
  }),
});

export const collections = { rings };
