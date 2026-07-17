import type { ReactNode } from 'react'
import './GameFrame.css'

interface Props {
  children: ReactNode
  title?: string
}

export function GameFrame({ children, title = 'Simulador de reforma' }: Props) {
  return (
    <div className="frame">
      <div className="frame__tape frame__tape--top" aria-hidden />
      <div className="frame__scaffold frame__scaffold--left" aria-hidden />
      <div className="frame__scaffold frame__scaffold--right" aria-hidden />

      <header className="frame__header">
        <div className="frame__badge">OBRA EN CURSO</div>
        <h1 className="frame__title">{title}</h1>
      </header>

      <main className="frame__main">{children}</main>

      <footer className="frame__footer">
        <span>Coral & Fran</span>
        <span className="frame__dust">··· polvo de obra ···</span>
      </footer>
    </div>
  )
}
