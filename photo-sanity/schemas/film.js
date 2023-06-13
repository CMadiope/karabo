export default {
  name: 'film',
  title: 'Film',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },

    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
}
