import React from 'react'
import supabase from '../../utils/supabase'

export const revalidate = 10;

export const item = async ()=> {
    const {data} = await supabase.from("parks").select();
    return {data};
}

const Getitem = async () => {

  const {data} = await item();

  return (
    // <pre>{JSON.stringify(data, null, 2)}</pre>
    <div className='min-h-full p-2 mt-16'>
        {/* {{data.map((list) => (
            <p key={list.id}>
                {list.title}
            </p>
        ))}} */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Getitem