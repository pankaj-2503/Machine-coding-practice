import React from 'react'

const Pagination = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumber=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumber.push(i);
    }
    
  return (
    <nav>
        <ul className='flex justify-center '>
            {
                pageNumber.map((number)=>(
                    <li key={number}  className='p-1 mx-1 my-2 border-solid border-2 border-gray-300 hover:bg-gray-200'>
                        <a onClick={()=>paginate(number)} href="!#" className='text-blue-400  hover:text-black '>{number}</a>
                    </li>
                ))
            }

        </ul>
    </nav>
  )
}

export default Pagination