
import React from 'react'

const Page = ({posts,loading}) => {
  
  if(loading){
    return <h2 className='text-center font-xl my-6'>Loading...</h2>
  }
 
  return (
    <ul className='mx-12  my-4'>
       {
        posts?posts.map((post)=>(
            <li key={post.id} className=' border-solid border-2 border-gray-300 font-sans text-center p-1'>{post.title}</li>
        )):null
       }
    </ul>
  )
}

export default Page