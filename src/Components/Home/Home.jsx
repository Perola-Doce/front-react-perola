import { useState } from "react";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MaisVendidos from "../MaisVendidos/MaisVendidos";
import style from './home.module.css'

export default function Home(){
    const [catalogo, setCatalogo] = useState(false)

    return(
        <body>
            <Header />
            {catalogo == false ? (                
                <main>
                    <section className={style.principal}>
                        <div className={style.divTextos}>
                            <h1 className={style.titulo}>Doceria caseira</h1>
                            <h3 className={style.descricao}>Descubra nossas tortas, cookies, bolos e muito mais! Tudo feito a mão e com os melhores ingredientes!</h3>
                            <Button titulo={"Compre agora"} backgroundColor="rosa"/>
                        </div>
                        <img className={style.imagem} src="https://i.pinimg.com/736x/50/df/6a/50df6a7fa81f0964c8a1cb81e8d81f45.jpg" alt="" />
                    </section>
                    <MaisVendidos />
                </main>
            ) : (
                <main>
                    
                </main>
            )}
            
            <Footer />
        </body>
    )
}