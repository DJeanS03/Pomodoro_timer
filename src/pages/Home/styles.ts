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

  color: ${(props) => props.theme['gray-100']};
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
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-300']};
    transform: translateY(-0.2em);
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  &:hover {
    background: ${(props) => props.theme['red-700']};
    transform: translateY(-0.2em);
  }
`
