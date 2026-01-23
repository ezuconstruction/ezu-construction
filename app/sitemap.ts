import type { MetadataRoute } from "next";
import { servicesData } from "./services/services";
import { constructionData } from "./construction/construction";
import { projectsData } from "./projects/projects";
import { publicationsData } from "./publications/publications";

const BASE_URL = "https://ezuconstruction.ca";

const toUrl = (path: string) => `${BASE_URL}${path}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: toUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: toUrl("/about"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: toUrl("/contact"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: toUrl("/projects"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: toUrl("/publications"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: toUrl("/social-media"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: toUrl("/accessibility"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: toUrl("/privacy"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: toUrl("/tos"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: toUrl("/llms"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: toUrl(`/services/${service.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const constructionRoutes: MetadataRoute.Sitemap = constructionData.map((service) => ({
    url: toUrl(`/construction/${service.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: toUrl(`/projects/${project.slug}`),
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  const publicationRoutes: MetadataRoute.Sitemap = publicationsData.map((article) => ({
    url: toUrl(`/publications/${article.slug}`),
    lastModified: new Date(article.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...constructionRoutes,
    ...projectRoutes,
    ...publicationRoutes,
  ];
}
