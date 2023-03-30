import styled from 'styled-components'

export const FormContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['text-title']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  //coloca tudo que é semelhante nos elementos
  background: transparent;
  height: 2rem;
  border: 0;
  outline: 0;
  padding: 0 0.5rem;
  font-size: 1.125rem;
  border-bottom: 2px solid ${(props) => props.theme.placeholder};
  color: ${(props) => props.theme['text-title']};

  &:focus {
    border-color: ${(props) => props.theme['ignite-mid']};
  }

  &::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
