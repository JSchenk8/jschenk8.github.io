// import { Button } from "@workspace/ui/components/button"
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import Photography from './components/Photography'
import Software from './components/Software'

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/software" element={<Software />} />
          </Routes>
    </BrowserRouter>
  )
}
