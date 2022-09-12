import  {useState} from 'react';
import "./meme.css";
import memesData  from "./memesData"; 

export default function Meme() {

  const [image , setImage] = useState('')

    function getMemeImage() {
    let memesArray = memesData.data.memes
    const meme = memesArray[Math.floor(Math.random() * memesArray.length)]
    const {url} =  meme
    console.log(meme)
    console.log(url)
    setImage(url)
}

  return (
    <main>
    <div className="form">
      <input type="text" placeholder="Top Text" className="input-field" />
      <input type="text" placeholder="Bottm Text" className="input-field" />
      <button className="input-button" onClick={getMemeImage}>Get a new meme image</button>
    </div>
    <div  class="meme-image">
    <img src={image} alt="meme"/>
    </div>
    
    </main>
  );
}
