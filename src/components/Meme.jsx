import { useState } from 'react'
import memeButtonImage from '../assets/memeButtonImage 🖼.png'
import memeData from '../memeData'

const Meme = () => {
  const [memeInfo, setMemeInfo] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  })
  
  const [allMemeImages, setAllMemeImages] = useState({memeData})

  const randomizedNewImg = () => {
    const memesArray = allMemeImages.memeData.data.memes
    // console.log('memesArray', memesArray)
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    // console.log('randomNumber', randomNumber)
    setMemeInfo((prev) => {
      return {
        ...prev,
        randomImage: memesArray[randomNumber].url,
      }
    })
  }


  return (
    <main className='memeContainer'>
      <div className='form'>
        <input type='text' placeholder='Top text' className='formInput'></input>
        <input
          type='text'
          placeholder='Bottom text'
          className='formInput'
        ></input>
      </div>
      <button type='button' className='memeButton' onClick={randomizedNewImg}>
        <img src={memeButtonImage} alt='button' width='' height='' />
      </button>
      <div className='newMeme'>
        <img src={memeInfo.randomImage} alt='new meme' />
      </div>
    </main>
  )
}

export default Meme
