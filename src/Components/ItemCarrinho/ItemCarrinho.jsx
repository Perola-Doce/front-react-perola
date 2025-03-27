import { useState } from "react";
import style from "./itemCarrinho.module.css";
import PropTypes from 'prop-types';

export default function ItemCarrinho({ imagem, nomeProduto, preco }) {
    const [quantidade, setQuantidade] = useState(1);

    const aumentarQuantidade = () => {
        setQuantidade(quantidade + 1);
    };

    const diminuirQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    };

    return (
        <div className={style.principal}>
            <img
                className={style.imagem}
                src={imagem}
                alt={nomeProduto}
            />
            <div className={style.infos}>
                <h3 className={style.nomeProduto}>{nomeProduto}</h3>
                <p className={style.preco}>R${preco}</p>
                <div className={style.divQuantidade}>
                    <button onClick={diminuirQuantidade} className={style.botaoEsquerdo}>-</button>
                    <span className={style.quantidade}>{quantidade}</span>
                    <button onClick={aumentarQuantidade} className={style.botaoDireito}>+</button>
                </div>
            </div>
        </div>
    );
}

ItemCarrinho.propTypes = {
    imagem: PropTypes.string,
    nomeProduto: PropTypes.string,
    preco: PropTypes.string,
}