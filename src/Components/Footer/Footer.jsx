import style from './footer.module.css'
import caminhao from '../../assets/caminhao.svg'
import coracaoRosa from '../../assets/coracaoRosa.svg'
import presente from '../../assets/presente.svg'

export default function Footer(){
    return(
        <footer className={style.principal}>
            <div className={style.blocos}>
                <img className={style.blocoImg} src={caminhao} alt="" />
                <p className={style.nome}>Entrega Rápida</p>
            </div>
            <div className={style.blocos}>
                <img className={style.blocoImg} src={coracaoRosa} alt="" />
                <p className={style.nome}> Doces Feitos Com Amor</p>
            </div>
            <div className={style.blocos}>
                <img className={style.blocoImg} src={presente} alt="" />
                <p className={style.nome}>Presente Perfeito</p>
            </div>
        </footer>
    )
}