import React from 'react'

export default function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-7xl'>FNZL Daily's Blog</h1>
        <h2 className='mt-5 md:mt-0'>
          Welcome To {" "}
          <span className='underline decoration-4 decoration-[#F7AB0A]'> Every Developers</span>{" "}
          favourite blog in the Devosphere
        </h2>
      </div>
      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, odit aut expedita deleniti nisi nihil provident
      </p>
    </div>
  )
}
