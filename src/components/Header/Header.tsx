import StyleHeader from './Header.module.css'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <header className={StyleHeader.header}>
        <img src={Logo} alt="logo da aplicação" />
    </header>
  )
  
}