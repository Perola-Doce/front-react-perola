import Button from '../Button/Button';
import style from './productCard.module.css'
import PropTypes from 'prop-types';

export default function ProductCard( {fotoProduto, nomeProduto, descricaoProduto, preco} ){
    return(
        <div className={style.principal}>
            <div className={style.cardImg}>
                <img src={fotoProduto} alt="" className={style.fotoProduto}/>
                <h1 className={style.nomeProduto}>{nomeProduto}</h1>
            </div>
            <p className={style.descricaoProduto}>{descricaoProduto}</p>
            <div className={style.precoCarrinho}>
                <h3 className={style.preco}>R${preco}</h3>
                <Button />
            </div>
        </div>
    )
}
ProductCard.propTypes = {
    fotoProduto: PropTypes.string,
    nomeProduto: PropTypes.string,
    descricaoProduto: PropTypes.string, 
    preco: PropTypes.string
}