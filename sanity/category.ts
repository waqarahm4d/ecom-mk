export const category = {
    name: "category",
    type: "document",
    title: "Categories",
    fields: [
        {
            name: "name",
            title: "Product Category",
            type: "string"
        },
        {
            name: "slug", 
            title: "Slug",
            type: "slug",
            options: {
                source: 'name',
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input:any) => input
                                     .toLowerCase()
                                     .replace(/\s+/g, '-')
                                     .slice(0, 200)
              }
        },
        {
            name: "image",
            title: "Category Image",
            type: "image"
        }
    ]
}