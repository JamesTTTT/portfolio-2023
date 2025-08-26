import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "spde8td0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export const fetchAllData = async () => {
  const data = await client.fetch(`{
    "navItems": *[_type == "navItem"] | order(_createdAt asc),
    "links": *[_type == "link"] | order(_createdAt asc),
    "home": *[_type == "home"][0],
    "about": *[_type == "about"][0],
    "contact": *[_type == "contact"][0],
    "projects": *[_type == "project"] | order(_createdAt desc),
    "experience": *[_type == "experience"] | order(period[0] desc),
    "education": *[_type == "education"][0],
    "skills": *[_type == "skill"] | order(name asc),
  }`);
  return data;
};
