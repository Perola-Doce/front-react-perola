import style from './header.module.css';
import perolaDoce from '../../assets/perolaDoce.svg'
import lupa from '../../assets/lupa.svg'
import carrinho from '../../assets/carrinho.svg'

export default function Header() {
    return (
        <div className={style.principal}>
            <img className={style.img} src={perolaDoce} alt="" />
            <div className={style.divLinks}>
                <a className={style.link} href="/home">Home</a>
                <a className={style.link} href="/catalogo">Catálogo</a>
            </div>
            <div className={style.divButtons}>
                <a href=""><img src={lupa} alt="" /></a>
                <a href=""><img src={carrinho} alt="" /></a>
            </div>
        </div>
    );
}
