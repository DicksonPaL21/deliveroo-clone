import { createClient } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'l0hq6mmh',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

export default client;

const builder = ImageUrlBuilder(client);
export const urlFor = (source) =>
  !!source ? builder.image(source) : undefined;

// '*[_type == "featured"] {..., restaurants[] -> {..., dishes[] ->}}'

export const getCategories = async () => {
  return await client.fetch('*[_type == "category"]');
};

export const getFeaturedCategories = async () => {
  return await client.fetch('*[_type == "featured"]');
};

export const getFeaturedCategoryById = async (id) => {
  return await client.fetch(
    '*[_type == "featured" && _id == $id] {..., restaurants[] -> {..., dishes[] ->, type -> {name}}}[0]',
    { id }
  );
};
