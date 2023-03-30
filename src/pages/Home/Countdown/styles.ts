import styled from 'styled-components'

export const CountdownContainer = styled.main`
  font-family: 'roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['text-title']};
  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['shape-secondary']};
    padding: 2rem 1rem;
    border-radius: 0%;
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['ignite-mid']};
  width: 4rem;

  display: flex;
  justify-content: center;
`
