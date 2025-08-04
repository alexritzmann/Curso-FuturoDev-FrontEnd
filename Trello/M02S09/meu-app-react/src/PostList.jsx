

import { useState, useEffect } from 'react'
import Header from './components/header/Header'

import './PostList.css'
import Post from './components/post/Post'


function PostList() {

  const [postCount, setPostCount] = useState(0)
  const [listPosts, setListPosts] = useState([])

  useEffect(() => {
    const updatePostCount = () => {
      const posts = JSON.parse(localStorage.getItem("@posts") || "[]")
      setListPosts(posts)
      setPostCount(posts.length)
    }

    updatePostCount()
    window.addEventListener('storage', updatePostCount)

    return () => window.removeEventListener('storage', updatePostCount)
  }, [])


  const handleDelete = (postId) => {
    const updatePosts = listPosts.filter((post) => post.id !== postId)

    localStorage.setItem("@posts", JSON.stringify(updatePosts))
    setListPosts(updatePosts)
    setPostCount(updatePosts.length)

    window.dispatchEvent(new Event('storage'))
  }

  
  
  return (
  <>
    <header>
      <section>
        <Header postCount={postCount}/>
      </section>
    </header>

    <main>
      <section>
        {listPosts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            url={post.cover}
            type={post.category}
            title={post.title}
            description={post.description}
            date={post.date}
            handleDelete={handleDelete}
          />
        ))}
      </section>
    </main>
  </>
  )
}

export default PostList

