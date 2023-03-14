import './styles.ts'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import logoignite from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <nav className="header">
          <img className="logo" src={logoignite} alt="" />
          <div className="rightIcons">
            <NavLink to="/">
              <i className="bx bx-stopwatch icon"></i>
            </NavLink>
            <NavLink to="/history">
              <i className="bx bx-history icon" title="Histórico"></i>
            </NavLink>
          </div>
        </nav>
      </HeaderContainer>
    </div>
  )
}
