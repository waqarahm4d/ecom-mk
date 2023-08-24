import { createClient } from "next-sanity";
// import { apiVersion, dataset, projectId, useCdn } from "sanity/env";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export const client = createClient({
    token: process.env.SANITY_ACCESS_TOKEN,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-08-13',
    dataset: dataset,
    projectId: projectId,
    useCdn: true
})