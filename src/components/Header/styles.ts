import styled from 'styled-components'

export const HeaderContainer = styled.header`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .igniteLogo {
    height: 1.875rem;
  }

  .pomodoroLogo {
    height: 2rem;
  }

  .pomoroTitle {
    gap: 0.8rem;
    color: ${(props) => props.theme['text-title']};
  }

  .icon {
    font-size: 1.5rem;
    color: ${(props) => props.theme['text-title']};
    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;
    transition: 0.2s;
  }

  .icon:hover {
    border-bottom: 3px solid ${(props) => props.theme['ignite-mid']};
  }

  .flexIcons {
    display: flex;
    gap: 0.5rem;
  }

  a.active > .icon {
    color: ${(props) => props.theme['ignite-mid']};
  }

  .switch {
    font-size: 1.063rem;
    position: relative;
    display: inline-block;
    width: 3.75rem;
    height: 1.875rem;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: -0.125rem;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme['color-background']};
    transition: 0.4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 1.625rem;
    width: 1.625rem;
    border-radius: 20px;
    left: 0.137rem;
    bottom: 0.107rem;
    z-index: 2;
    background-color: #e8e8e8;
    transition: 0.4s;
  }

  .sun .sunIcons {
    position: absolute;
    top: 0.313rem;
    left: 2.125rem;
    z-index: 1;
    color: #ffd43b;
    font-size: 1.375rem;
  }

  .moon .moonIcons {
    fill: #73c0fc;
    position: absolute;
    top: 0.25rem;
    left: 0.313rem;
    z-index: 1;
    font-size: 1.375rem;
  }

  /* .switch:hover */
  .sun .sunIcons {
    animation: rotate 10s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  /* .switch:hover */
  .moon .moonIcons {
    animation: tilt 5s linear infinite;
  }

  @keyframes tilt {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(-10deg);
    }

    75% {
      transform: rotate(10deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  .input:checked + .slider {
    background-color: ${(props) => props.theme['shape-content']};
  }

  .input:focus + .slider {
    box-shadow: 0 0 1px ${(props) => props.theme['shape-content']};
  }

  .input:checked + .slider:before {
    transform: translateX(1.875rem);
  }
`
