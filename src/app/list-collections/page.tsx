import Category from '@/components/Category';
import { CategoryList, ICategory } from '@/lib/category';
import React from 'react'

function Page() {
    const getCategory = CategoryList;
  return (
    <div className='max-w-screen-xl m-auto'>
        <div className="mb-[100px] mt-[100px]">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight 1g:text-2x1">
            All Categories
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#0062f5] inline-flex" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2 lg:px-0">
            {/* category  */}
            {
                getCategory.map((category:ICategory) => (
                    <Category key={category.id} id={category.id} name={category.name} slug={category.slug} image={category.image} />
                ))
            }
          {/* category  */}
        </div>
      </div>
    </div>
  )
}

export default Page