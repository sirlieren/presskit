import './style.css'
import { setupCounter } from './counter.ts'
import { Header } from './components/header.ts'
import { Hero } from './components/hero.ts'
import { Gallery } from './components/gallery.ts'
import { Footer } from './components/footer.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}
  ${Hero()}
  ${Gallery()}
  ${Footer()}
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
