import { promises as fs } from "fs";
import type { MetadataRoute } from "next";
import path from "path";

async function getAppRoutes(): Promise<string[]> {
  const appDir = path.join(process.cwd(), "src/app");
  const files = await fs.readdir(appDir, { withFileTypes: true });

  return files
    .filter((file) => file.isDirectory() && file.name !== "api")
    .map((file) => file.name);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await getAppRoutes();
  const baseUrl = "https://monkin.co";

  return routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 1,
  }));
}
