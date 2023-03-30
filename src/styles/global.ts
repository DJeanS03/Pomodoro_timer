import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['color-background']};
    color: ${(props) => props.theme['text-base']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .icons {
    cursor: pointer;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    html  {
      height: 100vh;
      font-size: 70%;
      margin: auto 10px;
    }

    form {
      width: 90%;
    }

    span, .jXaXdV {
      font-size: 5rem;
      line-height: 5rem;
   }
  }
`
