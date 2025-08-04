import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostList from './PostList.jsx'
import Post from './components/post/Post.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostList />
  </StrictMode>,
)
