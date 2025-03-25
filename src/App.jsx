import { DarkMode } from './components/DarkMode'
import { LikeDislike } from './components/LikeDislike'
import { ColorGenerator } from './components/ColorGenerator'
import { Timer } from './components/Timer'
import './App.css'

export const App = () => {
  return (
    <div className="app-container">
      <h1>React Components Demo</h1>
      
      <section>
        <h2>Dark Mode Toggle</h2>
        <DarkMode />
      </section>

      <section>
        <h2>Like/Dislike Counter</h2>
        <LikeDislike />
      </section>

      <section>
        <h2>Color Generator</h2>
        <ColorGenerator />
      </section>

      <section>
        <h2>Timer</h2>
        <Timer />
      </section>
    </div>
  )
}