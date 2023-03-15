import './styles.ts'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import logoignite from '../../assets/ignite-logo.svg'
import pomodorologo from '../../assets/pomodoro-logo.svg'
export function Header() {
  return (
    <div>
      <HeaderContainer>
        <nav className="header">
          <img className="igniteLogo" src={logoignite} alt="" />
          <div className="pomoroTitle flex">
            <img className="pomodoroLogo" src={pomodorologo} alt="" />
            <h1>Pomodoro Timer</h1>
          </div>
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
