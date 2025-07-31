import { useState, useEffect } from 'react';
import './App.css'
import Form from './components/form/Form'
import Header from './components/header/Header'

function App() {
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

  const handleNewPost = () => {
    const posts = JSON.parse(localStorage.getItem("@posts") || "[]");
    setPostCount(posts.length);
  };

  return (
    <>
      <header>
        <section>
          <Header postCount={postCount}/>
        </section>
      </header>

      <main>
        <section>
          <Form onNewPost={handleNewPost}/>
        </section>
      </main>
    </>
  )
}

export default App

