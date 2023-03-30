import styled from 'styled-components'

export const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem 0;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['text-title']};
  }
`
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }

  th {
    background: ${(props) => props.theme['shape-header']};
    padding: 1rem;
    text-align: left;
    color: ${(props) => props.theme['color-header-table']};
    line-height: 1.6;
    font-size: 0.875rem;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  td {
    background: ${(props) => props.theme['shape-content']};
    border-top: 4px solid ${(props) => props.theme['shape-primary']};
    padding: 1rem;

    &:first-child {
      width: 30%;
      padding-left: 1.5rem;
    }

    &:last-child {
      padding-right: 1.5rem;
    }
  }
`
const STATUS_COLORS = {
  'warning-light': 'warning-light',
  'ignite-mid': 'ignite-mid',
  'ec-light': 'ec-light',
} as const // define a const como imutável

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.label<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
