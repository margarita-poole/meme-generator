import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <header className='nav'>
      <img src={Logo} alt='logo' className='navImg'/>
      <span className='navTitle'>React Course - Project 3</span>
    </header>
  )
}

export default Header
