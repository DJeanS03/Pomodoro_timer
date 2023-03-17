import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";


export function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em:</label>
      <TaskInput
        id="task"
        placeholder="Nome do seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <label htmlFor="minutesAmount">Durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={90}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>Minutos</span>
    </FormContainer>
  )
}
