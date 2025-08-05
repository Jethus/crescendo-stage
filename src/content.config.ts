import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  // Type-check frontmatter using a schema
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

const services = defineCollection({
  // Load Markdown files in the `src/content/services/` directory.
  loader: file("./src/content/services.json"),
  schema: ({ image }) =>
    z.object({
      heading: z.string(),
      image: image(),
      description: z.string(),
      order: z.number(),
    }),
});

export const collections = { blog, services };
