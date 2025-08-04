

import { useState, useEffect } from 'react'
import Header from './components/header/Header'

import './PostList.css'
import Post from './components/post/Post'


function PostList() {

  const [postCount, setPostCount] = useState(0)
  const [listPosts, setListPosts] = useState([])
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    const updatePostCount = () => {
      const posts = JSON.parse(localStorage.getItem("@posts") || "[]")
      const counts = {}

      setListPosts(posts)
      setPostCount(posts.length)

      posts.forEach(post => {
        counts[post.category] = (counts[post.category] || 0) + 1 
        setCategoryCounts(counts)
      })
    }

    updatePostCount()
    window.addEventListener('storage', updatePostCount)

    return () => window.removeEventListener('storage', updatePostCount)
  }, [])


  const handleDelete = (postId) => {
    const updatedPosts = listPosts.filter((post) => post.id !== postId)
    
    localStorage.setItem("@posts", JSON.stringify(updatedPosts))
    setListPosts(updatedPosts);
    setPostCount(updatedPosts.length)
    
    const counts = {...categoryCounts}
    const deletedPost = listPosts.find(post => post.id === postId)
    
    if (deletedPost && counts[deletedPost.category]) {
      counts[deletedPost.category] -= 1
      if (counts[deletedPost.category] === 0) {
        delete counts[deletedPost.category]
      }
      setCategoryCounts(counts)
    }
    
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
      <section className="category-summary">
        <h3>Posts por Categoria:</h3>
        <div className="category-counters">
          {Object.entries(categoryCounts).map(([category, count]) => (
            <div key={category} className="category-item">
              <span className="category-name">{category}:</span>
              <span className="category-count">{count}</span>
            </div>
          ))}
        </div>
      </section>

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

