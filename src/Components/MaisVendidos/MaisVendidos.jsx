import ProductCard from '../productCard/ProductCard';
import style from './maisVendidos.module.css';
import { useEffect, useState } from "react";

export default function MaisVendidos( { adicionarAoCarrinho } ) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchProducts(callback) {
        try {
            const response = await fetch("https://apidoce.onrender.com/api/products/all");
            if (!response.ok) {
                throw new Error("Erro ao buscar produtos");
            }
            const data = await response.json();
            callback(data); 
        } catch (err) {
            setError(err.message);
            console.log(err.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts(setProducts);
    }, []);

    if (loading) return <div className={style.carregamento}><h1>Preparando os docinhos...</h1></div>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <div className={style.divProdutos}>
            <h1>Mais vendidos</h1>
            <div className={style.produtos}>
                {products.slice(0, 3).map(produto => (
                    <ProductCard
                        key={produto.id}
                        fotoProduto={produto.image}
                        nomeProduto={produto.name}
                        descricaoProduto={produto.description}
                        preco={produto.price}
                        adicionarAoCarrinho={adicionarAoCarrinho}
                    />
                ))}
            </div>
        </div>
    );
}
