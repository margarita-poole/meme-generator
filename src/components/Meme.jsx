import { useState } from 'react'
import memeButtonImage from '../assets/memeButtonImage 🖼.png'
import memeData from '../memeData'

const Meme = () => {
  const [memeInfo, setMemeInfo] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  })

  const [allMemeImages, setAllMemeImages] = useState({ memeData })

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

  function handleChange(event) {
    const { name, value } = event.target
    setMemeInfo((prevMemeInfo) => {
      return {
        ...prevMemeInfo,
        [name]: value,
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className='memeContainer'>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Top text'
          className='formInput'
          name='topText'
          onChange={handleChange}
          value={memeInfo.topText}
        />
        <input
          type='text'
          placeholder='Bottom text'
          className='formInput'
          name='bottomText'
          onChange={handleChange}
          value={memeInfo.bottomText}
        ></input>
      </form>
      <button
        type='submit'
        className='memeButton'
        onClick={randomizedNewImg}
        onSubmit={handleSubmit}
      >
        <img src={memeButtonImage} alt='button' width='' height='' />
      </button>
      <div className='meme'>
        <img src={memeInfo.randomImage} alt='new meme' className='memeImage' />
        <h2 className='memeText top'>{memeInfo.topText}</h2>
        <h2 className='memeText bottom'>{memeInfo.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme
