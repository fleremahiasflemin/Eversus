
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Duelo from './pages/Duelo'

function App() {
  return (
    <div className="text-white bg-[#0f0f1a] min-h-screen p-4">
      <nav className="flex justify-end space-x-4 text-sm">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/duelo" className="hover:underline text-blue-400">Duelos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/duelo" element={<Duelo />} />
      </Routes>
    </div>
  )
}

export default App
