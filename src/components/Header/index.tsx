import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import logoignite from '../../assets/ignite-logo.svg'
import pomodorologo from '../../assets/pomodoro-logo.svg'
import { useThemeContext } from '../../context/ThemeContext'

export function Header() {
  const { toggleTheme, isDarkTheme } = useThemeContext()

  return (
    <div>
      <HeaderContainer>
        <nav className="header">
          <div className="flexIcons">
            <img className="igniteLogo" src={logoignite} alt="" />
            <label className="switch">
              <span className="sun">
                <i className="bx bxs-sun sunIcons"></i>
              </span>
              <span className="moon">
                <i className="bx bxs-moon moonIcons"></i>
              </span>
              <input
                checked={isDarkTheme === true}
                onClick={() => toggleTheme()}
                type="checkbox"
                className="input"
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="pomoroTitle flex">
            <img className="pomodoroLogo" src={pomodorologo} alt="" />
            <h1>Pomodoro Timer</h1>
          </div>
          <div className="flexIcons">
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
