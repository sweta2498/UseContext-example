import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Comment from './Component/Comment';
import HomePage from './Component/HomePage';
import Loginuser from './Component/Loginuser';
import NewPost from './Component/NewPost';
import Posts from './Component/Posts';
import Simpleexample from './Component/Simpleexample';
export const UserContext = createContext(null);

function App() {

  const [user, setUser] = useState();
  const [post, setPost] = useState();
  const [comments, setComments]=useState();
  useEffect(() => {
    getlogindata();
    getpost();
    getcomments();
  }, [])

  function getlogindata() {
    fetch("https://62983daaf2decf5bb73ddb37.mockapi.io/UserData").then((result) => {
      result.json().then((resp) => {
        setUser(resp)
      })
    })
  }
  function getpost() {
    fetch("https://62983daaf2decf5bb73ddb37.mockapi.io/post").then((result) => {
      result.json().then((resp) => {
        setPost(resp)
      })
    })
  }
  function getcomments() {
    fetch("https://62983daaf2decf5bb73ddb37.mockapi.io/comment").then((result) => {
      result.json().then((resp) => {
        setComments(resp)
      })
    })
  }

  return (
    <div className="App">Login
      {/* <Simpleexample/> */}
      
      <BrowserRouter>
      <UserContext.Provider value={{user,post,setPost,comments,setComments}}>
        <Routes>
          <Route path='/' element={<Loginuser/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
          <Route path='/newpost' element={<NewPost/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/comment' element={<Comment/>}/>
       
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>

      {/* <BrowserRouter>
      <UserContext.Provider value={{ user }}>
        <Loginuser />
      </UserContext.Provider>
        <Routes>
          <Route path='/homepage' element={<HomePage />} />
        </Routes>
      </BrowserRouter> */}
      
    </div>
  );
}

export default App;

