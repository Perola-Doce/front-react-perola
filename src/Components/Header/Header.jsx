import style from './header.module.css';
import perolaDoce from '../../assets/perolaDoce.svg'
import carrinho from '../../assets/carrinho.svg'

export default function Header({ onClick }) {
    return (
        <div className={style.principal}>
            <img className={style.img} src={perolaDoce} alt="" />
            <div className={style.divLinks}>
                <a className={style.link} href="/home">Home</a>
            </div>
            <div className={style.divButtons} onClick={onClick}>
                <a href=""><img src={carrinho} alt="" /></a>
            </div>
        </div>
    );
}
