import { useState,useEffect } from 'react'
import axios from "axios"
import Posts from "./components/Page"
import Pagination from './components/Pagination';
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(()=>{
    const fetchposts=async()=>{
      setLoading(true);
      const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    }

    fetchposts();

  },[]);

  console.log(posts);
  
  //get current posts
  const indexOfLastPost=currentPage*postsPerPage;
  const indexOfFirstPost=indexOfLastPost-postsPerPage;
  const currentPosts= posts.slice(indexOfFirstPost,indexOfLastPost);

  //change page
  const paginate=(pageNumber)=>setCurrentPage(pageNumber);

  
  return (
    <>
      <div className='container mt-5'>
          <h1 className=' text-cyan-400 mb-2  text-center font-bold text-xl'>My Blog</h1>
          <Posts posts={currentPosts} loading={loading}/>
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
      </div>
      
    </>
  )
}

export default App
