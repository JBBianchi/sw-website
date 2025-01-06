import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const mdExtensions = ['markdown', 'mdown', 'mkdn', 'mkd', 'mdwn', 'md', 'mdx'];
const getLoader = (contentType: string) => glob({
  base: `./src/content/${contentType}`,
  pattern: `**/[^_]*.{${mdExtensions.join(',')}}`
});

const blog = defineCollection({
  loader: getLoader('blog'),
  schema: z.object({
		title: z.string(),
		description: z.string(),
    author: z.string(),
    date: z.coerce.date(),
  })
});
/*
const docs = defineCollection({
  loader: getLoader('docs'),
  schema: z.object({
		title: z.string(),
		description: z.string()
  })
});
*/
export const collections = {
  blog,
  //docs,
};