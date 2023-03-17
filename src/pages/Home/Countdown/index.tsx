import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import { CyclesContext } from '..'
import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  const { activeCycle, activeCycleId, markCurrentCycleAsFinished } =
    useContext(CyclesContext)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0) // o tando de segundos que se passaram após o ciclo ser ativo

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
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
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished])

  //= ============================TIMER==================================

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60) // arredonda o numero para baixo
  const secondsAmount = currentSeconds % 60
  const minutes = String(minutesAmount).padStart(2, '0') // se ele não tiver 2 caracteres, adiciona 'zeros' na frente
  const seconds = String(secondsAmount).padStart(2, '0')
  //= ===================================================================

  //= ============================PAGE TITLE==============================
  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - Time to Focus`
    } else {
      document.title = 'Pomodoro Timer'
    }
  }, [minutes, seconds, activeCycle])
  //= ====================================================================

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span> {seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
