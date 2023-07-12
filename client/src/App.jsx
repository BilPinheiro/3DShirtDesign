import CanvasModel from "./canvas"
import Custumizer from "./pages/Custumizer"
 import Home from "./pages/Home"

function App() {
  return (
    <main className="app transition-all easy-in">
      <Home />
      <CanvasModel />
      <Custumizer />
    </main>
  )
}

export default App
