import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect, useRef } from 'react'
import { CyclesContext } from '../../../context/CyclesContext'
import { CountdownContainer, Separator } from './styles'
import bip from '../../../assets/bip.mp3'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const audioRef = useRef<HTMLAudioElement>(null) // Ref para o elemento de áudio

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
          if (audioRef.current) {
            audioRef.current.play() // Toca o áudio quando o cronômetro chegar a 0
          }
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])

  //= ============================TIMER==================================

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60
  const minutes = String(minutesAmount).padStart(2, '0')
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
      <audio ref={audioRef} src={bip} />
    </CountdownContainer>
  )
}
