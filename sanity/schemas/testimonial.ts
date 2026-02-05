import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'role',
      title: 'Role/Title',
      type: 'string'
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string'
    }),
    defineField({
      name: 'avatar',
      title: 'Author Photo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image'
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [1, 2, 3, 4, 5]
      },
      initialValue: 5
    }),
    defineField({
      name: 'category',
      title: 'Service Category',
      type: 'string',
      options: {
        list: [
          { title: 'POS Systems', value: 'pos' },
          { title: 'Web Development', value: 'web' },
          { title: 'Digital Marketing', value: 'marketing' },
          { title: 'Enterprise Software', value: 'enterprise' },
          { title: 'General', value: 'general' }
        ]
      }
    }),
    defineField({
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    })
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'company',
      media: 'avatar'
    }
  }
});
