import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: 'l0hq6mmh',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
});

const builder = ImageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

export default client;
export { urlFor };
