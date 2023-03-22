import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'

/* import { useFormContext } from 'react-hook-form/dist/useFormContext' */

import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../context/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em:</label>
      <TaskInput
        id="task"
        placeholder="Nome do seu projeto"
        autoComplete="off"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <label htmlFor="minutesAmount">Durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={90}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <label>Minutos</label>
    </FormContainer>
  )
}
