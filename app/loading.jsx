import React from 'react'


const loading = () => {
  return (
    <div className='w-screen h-screen bg-slate-900 flex justify-center items-center'>
      <div className='animate-spin lg:h-10 lg:w-10 lg:ml-4 md:h-8 md:w-8 md:mr-3 sm:h-6 sm:w-6 sm:mr-2 h-4 w-4 mr-4'>
        <svg className=" w-full h-full text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
      <h4 className='lg:text-4xl md:text-3xl sm:text-2xl text-gray-50'>Loading...</h4>
    </div>
  )
}

export default loading