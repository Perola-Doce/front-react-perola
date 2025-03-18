import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import'./index.css'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import MaisVendidos from './Components/MaisVendidos/MaisVendidos.jsx'
import Button from './Components/Button/Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <section>
      <div>
        <h1></h1>
        <h3></h3>
        <Button titulo={"Compre agora"} backgroundColor="rosa"/>
      </div>
      <img src="" alt="" />
    </section>
    <MaisVendidos />
    <Footer />
  </StrictMode>,
)
