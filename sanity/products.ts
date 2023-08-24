export const products = {
    name: "product",
    type: "document",
    title: "Products",
    fields: [
        {
            name: "name",
            title: "Product Name",
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
            title: "Product Image",
            type: "array",
            of: [
                {
                    type: "image"
                }
            ]
        },
        {
            name: "description",
            title: "Product Description",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "category",
            title: "Product Categories",
            type: "reference",
            to:[
                {
                    type: "category",
                }
            ]
            
        },
        {
            name: "price",
            title: "Product Price",
            type: "number",
        },
        {
            name: "discounted",
            title: "Discounted Price",
            type: "number",
        },
        {
            name: "size",
            title: "Product Size",
            type: "array",
            of:[
                {
                    type: "string"
                }
            ]
        },
        {
            name: "color",
            title: "Product Color",
            type: "array",
            of:[
                {
                    type: "string"
                }
            ]
        },
        {
            name: "qty",
            title: "Quantity",
            type: "number",
        }
    ]
}