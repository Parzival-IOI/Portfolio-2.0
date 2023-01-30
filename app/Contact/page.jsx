// import { redirect } from 'next/navigation';
import React from 'react'
import Provider from "./Provider"
import Introduction from "./introduction"


const Contact = ({session}) => {
  // redirect('/About');
  return (
    <div className='min-h-[200vh] bg-teal-900'>
      <Provider session={session}>
        <Introduction/>
      </Provider>
    </div>
  )
}

export default Contact