import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { differenceInSeconds } from 'date-fns'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  StopCountdownButton,
  TaskInput,
} from './styles'
import { useEffect, useState } from 'react'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'informe a tarefa'),
  minutesAmount: zod.number().min(1, 'O Ciclo deve ser maior que 5 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>
interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  stopDate?: Date
  finishedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null) // vê ciclo ativo
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0) // o tando de segundos que se passaram após o ciclo ser ativo

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  //= ============================TIMER==================================
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId) // pecorre o vetor de ciclos e encontra um ciclo que seu id seja igual o id do ciclo ativo
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60) // arredonda o numero para baixo
  const secondsAmount = currentSeconds % 60
  const minutes = String(minutesAmount).padStart(2, '0') // se ele não tiver 2 caracteres, adiciona 'zeros' na frente
  const seconds = String(secondsAmount).padStart(2, '0')
  //= ===================================================================

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle
              }
            }),
          )
          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference) // só atualiza os segundos passados se não completar o total de segundos
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()), // o id vai ser a data em milesegundo
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    setCycles((state) => [...state, newCycle]) // pega todos os ciclos anteriores e adiciona ele no final
    setActiveCycleId(newCycle.id)
    setAmountSecondsPassed(0) // reinicia a contagem após colocar um novo ciclo, caso já tenha um em andamento
    reset() // apaga os caracteres do input após o submit
  }

  function handleStopCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, stopDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  //= ============================PAGE TITLE==============================
  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - Time to Focus`
    } else {
      document.title = 'Pomodoro Timer'
    }
  }, [minutes, seconds, activeCycle])
  //= ====================================================================

  //= ============================DATA VALIDATION=========================
  const task = watch('task')
  const isMinutesAmount = watch('minutesAmount')
  const isSubmitDisable = !task || !isMinutesAmount
  //= ====================================================================

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
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

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span> {seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        {activeCycle ? (
          <StopCountdownButton onClick={handleStopCycle} type="button">
            <i className="bx bx-stop icon"></i>
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisable} type="submit">
            <i className="bx bx-play icon"></i>
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
