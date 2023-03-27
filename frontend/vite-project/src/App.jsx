import { useEffect, useState } from 'react'
import './App.css'
import { InputForm } from './componets/InputForm.jsx'
import { OutputGästebuch } from './componets/OutputGästebuch.jsx'

function App() {
const [getPosts, setPosts] = useState()

// useEffect wegen Rendern
useEffect(() => {
  fetch("http://localhost:9999/api/getPostGaestebuch")
    .then(res => res.json())
    .then( data => setPosts(data))
}, [])

if (!getPosts) return



  return (
    <div className="App">
      <h1>Vite</h1>
      <InputForm setPosts={ setPosts }></InputForm>


      {getPosts.map((post,index) => {
        return (
          <OutputGästebuch key={index}  post = { post }></OutputGästebuch>
        )
      })}

    </div>
  )
}

export default App
