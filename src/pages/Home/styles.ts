import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.3rem;
  }
`

export const BaseCountdownButton = styled.button`
  width: 50%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  color: ${(props) => props.theme['text-button']};
  transition: background 0.3s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .icon {
    font-size: 2rem;
    line-height: 0;
  }
`
export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['ignite-mid']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['ignite-dark']};
    transform: translateY(-0.2em);
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['ec-light']};

  &:hover {
    background: ${(props) => props.theme['ec-dark']};
    transform: translateY(-0.2em);
  }
`
