import {  Routes, Route, useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import api from "./api/post"
import EditPost from "./EditPost";
function App() {
const [post, setPost] = useState([])

  const [searchResults, setSearchResults]=useState([])
  const [search,setSearch]=useState('')
  const [postTitle,setPostTitle]=useState('')
  const [postBody,setPostBody]=useState('')
  const [editTitle,setEditTitle]=useState('')
  const [editBody,setEditBody]=useState('')
  const navigate=useNavigate()
  useEffect(()=>
  {
    const fetchPosts= async ()=>
    {
      try{
        const response=await api.get('/post');
        setPost(response.data)
      }
      catch(err)
      {
        if(err.response)
        {
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        }
        else
        {
          console.log(`Error:${err.message}`)
        }

      }
    }
    fetchPosts();
  },[])
  const handleEdit = async(id)=>
  {
    const datetime=format(new Date(),'MMMM dd,yyyy pp')
    const updatedPost={id,title:editTitle,datetime,body:editBody}
    try{
      const response=await api.put(`/post/${id}`,updatedPost)
      setPost(post.map(post=> post.id===id?{...response.data}:post))
      setEditTitle('')
      setEditBody('')
      navigate('/')
    }
    catch(err)
      {
        console.log(`Error:${err.message}`)
      }
  }
  const handleSubmit = async(e)=>
  {
    e.preventDefault();
    const id= post.length?+post[post.length-1].id+1:1;
    const datetime=format(new Date(),'MMMM dd,yyyy pp')
    const newPost={id,title:postTitle,datetime,body:postBody}
    try{
      const response=await api.post('/post',newPost)
      const allPost=[...post,response.data]
      setPost(allPost)
      setPostTitle('')
      setPostBody('')
      navigate('/')
    }
    catch(err)
      {
        console.log(`Error:${err.message}`)
      }
  
  }
  const handleDelete = async(id) =>
  {
    try{
    await api.delete(`post/${id}`)
    const postList=post.filter(post=>post.id!==id)
    setPost(postList)
    navigate('/')
    }
    catch(err)
    {
      console.log(`Error:${err.message}`)
    }

  }
  useEffect(()=>
  {
    const filteredResults=post.filter((post)=>
    ((post.body).toLowerCase()).includes(search.toLowerCase())||
    ((post.title).toLowerCase()).includes(search.toLowerCase()));
    setSearchResults(filteredResults.reverse());
  },[post,search])
  return ( 
    <div className="App">
      <Header title="Postify"/>
      <Nav 
      search={search}
      setSearch={setSearch}
      />
      <Routes>
      <Route path="/" element={<Home searchResults={searchResults}/>}/>
      <Route path="post">
      <Route index element={<NewPost 
      postTitle={postTitle}
      postBody={postBody}
      setPostTitle={setPostTitle}
      setPostBody={setPostBody}
      handleSubmit={handleSubmit}
      />}/>
      
      <Route path=":id" element={<PostPage post={post} handleDelete={handleDelete}/>}/>
      </Route>
      <Route
      path="/edit/:id" element={<EditPost
      post={post}
      handleEdit={handleEdit}
      editTitle={editTitle}
      setEditTitle={setEditTitle}
      editBody={editBody}
      setEditBody={setEditBody}
      />}
      />
      <Route path="about" element={ <About />}/>
     <Route path="*" element={ <Missing />}/>
     
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
