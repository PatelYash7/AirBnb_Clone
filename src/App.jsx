import './App.css'
import Header from './Components/Header/Header'
import Filter from './Components/Filter/Filter'
import CardFlex from './Components/Card/CardFlex'
import axios from "axios";
const API_URL = "https://api.unsplash.com/search/photos";
import { useState,useEffect} from 'react'

function App() {

  const [input, setInput] = useState("Norway");
  useEffect(()=>{
  fetchImage();
  },[input])

  const [images, setImages] = useState([]);

  const fetchImage = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}?query=${input+" hotels  view"}&page=100&per_page=100&client_id=${import.meta.env.VITE_API_KEY}`
      );
      setImages(data.results);
    } catch (error) {
    }
  };
  return (
    <>
      <Header onInputChange={setInput} />
      <Filter />
      <CardFlex images={images}/>
    </>
  )
}

export default App
