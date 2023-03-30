import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CyclesContextProvider } from './context/CyclesContext'
import { ThemeContextProvider } from './context/ThemeContext'

export function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}
