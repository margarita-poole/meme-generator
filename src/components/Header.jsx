import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <nav className='nav'>
      <img src={Logo} alt='logo' className=''/>
      <span>React Course - Project 3</span>
    </nav>
  )
}

export default Header
