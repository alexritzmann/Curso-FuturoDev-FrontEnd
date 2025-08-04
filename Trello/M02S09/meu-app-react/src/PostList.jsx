

import { useState, useEffect } from 'react'
import Header from './components/header/Header'

import './PostList.css'
import Post from './components/post/Post';


function PostList() {

  const [postCount, setPostCount] = useState(0);
  const [listPosts, setListPosts] = useState([])

  useEffect(() => {
    const updatePostCount = () => {
      const posts = JSON.parse(localStorage.getItem("@posts") || "[]");
    
      setListPosts(posts)
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
          {listPosts.map((post, index) => (
            <Post
              key={index}
              url={post.cover}
              type={post.category}
              title={post.title}
              description={post.description}
              date={post.date}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default PostList
