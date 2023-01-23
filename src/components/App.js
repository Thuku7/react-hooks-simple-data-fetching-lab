// create your App component here
import React,{useEffect, useState} from "react";

function App() {
  const [initialRender, setInitialRender] = useState(false);
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data)=> {
      setImages(data.message)
      setInitialRender(true)
    })
  },[])

  if(!initialRender) return <p>Loading...</p>

  return (
    <div>
      <img src={images} alt="A Random Dog"/>
    
    </div>
  )

}




export default App;
