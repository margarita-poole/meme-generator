import { useEffect, useState } from 'react'
import memeButtonImage from '../assets/memeButtonImage 🖼.png'

const Meme = () => {
  const [memeInfo, setMemeInfo] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  })
  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes))
  }, [])

  const randomizedNewImg = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMemeInfo((prev) => {
      return {
        topText: '',
        bottomText: '',
        randomImage: url,
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

  return (
    <main className='memeContainer'>
      <div className='form'>
        <input
          id='topText'
          type='text'
          placeholder='Top text'
          className='formInput'
          name='topText'
          onChange={handleChange}
          value={memeInfo.topText}
        />
        <input
          id='bottomText'
          type='text'
          placeholder='Bottom text'
          className='formInput'
          name='bottomText'
          onChange={handleChange}
          value={memeInfo.bottomText}
        />
        <button
          type='submit'
          className='getNewImageButton'
          onClick={randomizedNewImg}
        >
          <img src={memeButtonImage} alt='button' className='buttonImage' />
        </button>
      </div>
      <div className='meme'>
        <img src={memeInfo.randomImage} alt='new meme' className='memeImage' />
        <h2 className='memeText top'>{memeInfo.topText}</h2>
        <h2 className='memeText bottom'>{memeInfo.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme
