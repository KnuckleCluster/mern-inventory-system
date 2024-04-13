import { useEffect } from "react";
import './index.css';
import axios from "axios";


function App() {

useEffect(() => {
  axios.get('http://localhost:5555/categories').then(
    response => console.log(respones)
  )
}, [])


  return (
    <>
      <h3>Welcome to MERN INVENTORY SYSTEM 2024</h3>
    </>
  )
}

export default App
