import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import'./index.css'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import MaisVendidos from './Components/MaisVendidos/MaisVendidos.jsx'
import Button from './Components/Button/Button.jsx'
import style from './main.module.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <section className={style.principal}>
      <div className={style.divTextos}>
        <h1 className={style.titulo}>Doceria caseira</h1>
        <h3 className={style.descricao}>Descubra nossas tortas, cookies, bolos e muito mais! Tudo feito a mão e com os melhores ingredientes!</h3>
        <Button titulo={"Compre agora"} backgroundColor="rosa"/>
      </div>
      <img className={style.imagem} src="https://i.pinimg.com/736x/50/df/6a/50df6a7fa81f0964c8a1cb81e8d81f45.jpg" alt="" />
    </section>
    <MaisVendidos />
    <Footer />
  </StrictMode>,
)
