import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const services = defineCollection({
  // Load Markdown files in the `src/content/services/` directory.
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/services",
  }),
  schema: ({ image }) =>
    z.object({
      heading: z.string(),
      image: image(),
      order: z.number(),
    }),
});

const tabs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/tabs" }),
  schema: ({}) =>
    z.object({
      heading: z.string(),
      order: z.number(),
    }),
});

const lists = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/lists",
  }),
  schema: ({}) =>
    z.object({
      heading: z.string(),
      group: z.string(),
      order: z.number().optional(),
    }),
});

export const collections = { services, tabs, lists };
