import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { differenceInSeconds } from 'date-fns'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { createContext, useEffect, useState } from 'react'
import { NewCycleForm } from './NewCycleForm'
import { Countdown } from './Countdown'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  stopDate?: Date
  finishedDate?: Date
}

interface CyclesContextData {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
}

export const CyclesContext = createContext({} as CyclesContextData)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null) // vê ciclo ativo

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId) // pecorre o vetor de ciclos e encontra um ciclo que seu id seja igual o id do ciclo ativo

  /* function handleCreateNewCycle(data: NewCycleFormData) {
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
  } */

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

  //= ============================DATA VALIDATION=========================
  /* const task = watch('task')
  const isMinutesAmount = watch('minutesAmount')
  const isSubmitDisable = !task || !isMinutesAmount */
  //= ====================================================================

  return (
    <HomeContainer>
      <form /* onSubmit={handleSubmit(handleCreateNewCycle)}  */action="">
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}
        >
          {/* <NewCycleForm /> */}
          <Countdown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <StopCountdownButton onClick={handleStopCycle} type="button">
            <i className="bx bx-stop icon"></i>
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton /* disabled={isSubmitDisable} */ type="submit">
            <i className="bx bx-play icon"></i>
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
