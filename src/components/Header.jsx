import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <header className='nav'>
      <img src={Logo} alt='logo' className='navImg'/>
      <span className='navTitle'>Try customizing a popular meme!</span>
    </header>
  )
}

export default Header
