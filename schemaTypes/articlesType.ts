import { defineField, defineType } from "sanity";

export const articleType = defineType({
    name: "articles",
    title: "Articles",
    type: "document",
    fields: [
        defineField({
            name: 'name',
            title: "Title",
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: "Slug",
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 40
            }
        }),
        defineField({
            name: 'image_url',
            title: "Image",
            type: 'image',
        }),
        defineField({
            name: 'date',
            title: "Date",
            type: 'date',
        }),
        defineField({
            name: 'description',
            title: "Description",
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block'
                }
            ]
        }),
    ]
})