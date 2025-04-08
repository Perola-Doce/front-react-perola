import { useEffect, useState } from "react";
import ItemCarrinho from "../ItemCarrinho/ItemCarrinho";
import style from "./carrinho.module.css";

export default function Carrinho({ isOpen, onClose, produtos}) {
    const [error, setError] = useState(null);

    if (!isOpen) return null;

    return (
        <div className={style.overlay}>
            <div className={style.modal}>
                <button className={style.closeButton} onClick={onClose}>
                    <p>Fechar</p>
                </button>
                {error && <p>Erro: {error}</p>}
                {!error && (produtos.length === 0) && <p>Carrinho vazio</p>}
                {!error && produtos.length > 0 && (
                    <div className={style.produtos}>
                        <h1>Meu Carrinho</h1>
                        {produtos.map((produto, index) => (
                            <ItemCarrinho
                                key={index}
                                imagem={produto.image} 
                                nomeProduto={produto.name} 
                                preco={produto.price} 
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
