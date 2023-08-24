import React from 'react'

function Feature(props:{title:string, txt:string}) {
  return (
    <div className=''>
        <div className="content w-[70%]">
            <h2 className='font-semibold text-[1.125rem] mb-[1rem]'>{props.title}</h2>
            <p>{props.txt}</p>
        </div>
    </div>
  )
}

export default Feature