import { defineField, defineType } from 'sanity'

export const eventType = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: "Names",
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: "Image",
            type: 'url',
        }),
    ],
})