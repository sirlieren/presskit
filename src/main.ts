import './style.css'
import { Header } from './components/header.ts'
import { BackgroundHero } from './components/backgroundHero.ts'
import { Hero } from './components/hero.ts'
import { Gallery } from './components/gallery.ts'
import { Footer } from './components/footer.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}
  ${BackgroundHero()}
  ${Hero()}
  ${Gallery()}
  ${Footer()}
`
