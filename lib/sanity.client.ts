const { createClient } = require('next-sanity');
const imageUrlBuilder = require('@sanity/image-url').default;

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2025-01-01';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = imageUrlBuilder(client);

const urlFor = (source: any) => {
  return builder.image(source);
};

const sanityFetch = async ({ query, params = {} }: { query: string; params?: Record<string, any> }) => {
  try {
    return await client.fetch(query, params, {
      cache: 'no-store',
    });
  } catch (error) {
    console.error('Sanity fetch error:', error);
    throw error;
  }
};

module.exports = {
  client,
  urlFor,
  sanityFetch,
};

export { client, urlFor, sanityFetch };
