

import { useState, useEffect } from 'react'
import Header from './components/header/Header'

import './PostList.css'


function PostList() {

  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    const updatePostCount = () => {
      const posts = JSON.parse(localStorage.getItem("@posts") || "[]");
      setPostCount(posts.length);
    };

    updatePostCount();
    window.addEventListener('storage', updatePostCount);

    return () => window.removeEventListener('storage', updatePostCount);
  }, []);

  
    return (
    <>
      <header>
        <section>
          <Header postCount={postCount}/>
        </section>
      </header>

      <main>
        <section>
          
        </section>
      </main>
    </>
  )
}

export default PostList
