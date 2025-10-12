import {BrowserRouter, Route, Routes} from "react-router"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutUS from "./Components/AboutUS/AboutUS.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route element={<App />} path="/" />
    <Route path="/aboutus" element={<AboutUS />} />
  </Routes>
  </BrowserRouter>,
)
