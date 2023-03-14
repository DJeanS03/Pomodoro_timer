import styled from 'styled-components'

export const HeaderContainer = styled.header`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    height: 1.875rem;
  }

  .icon {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;
    transition: 0.2s;
  }

  .icon:hover {
    border-bottom: 3px solid ${(props) => props.theme['green-500']};
  }

  .rightIcons {
    display: flex;
    gap: 0.5rem;
  }

  a.active > .icon {
    color: ${(props) => props.theme['green-500']};
  }
`
