import { palettes } from './palettes'
import Palette from './components/Palette'
import './App.css'

function App() {
  return (
    <div className="container">

      <header>
        <h1>Barevné palety</h1>
      </header>

      <main>
        {palettes.map(onePalette => (
          <Palette
            key={onePalette.name}
            name={onePalette.name}
            image={onePalette.image}
            attribution={onePalette.attribution}
            colors={onePalette.colors}
            direction={onePalette.direction}
            description={onePalette.description}
          />
        ))}
      </main>

      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>

    </div >
  )
}

export default App
