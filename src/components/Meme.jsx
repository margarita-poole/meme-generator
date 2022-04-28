import memeButtonImage from '../assets/memeButtonImage 🖼.png'

const Meme = () => {
  return (
    <main className='memeContainer'>
      <form className='form'>
        <input type='text' placeholder='Top text' className='formInput'></input>
        <input
          type='text'
          placeholder='Bottom text'
          className='formInput'
        ></input>
      </form>
      <button type='button' className='memeButton'>
        <img src={memeButtonImage} alt='button' />
      </button>
    </main>
  )
}

export default Meme
