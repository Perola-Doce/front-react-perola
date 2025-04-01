import { useEffect, useState } from 'react';
import ItemCarrinho from '../ItemCarrinho/ItemCarrinho'
import style from './carrinho.module.css'

export default function Carrinho() {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchProducts() {
        try {
            const cartId = "10"; 
            const response = await fetch(`https://apidoce.onrender.com/api/cart/${cartId}`);
            if (!response.ok) {
                throw new Error("Erro ao buscar produtos");
            }
            const data = await response.json();
            setProducts(data);  
        } catch (err) {
            setError(err.message);
            console.log(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) return <div className={style.carregamento}><h1>Preparando os docinhos...</h1></div>;
    if (error) return <p>Erro: {error}</p>;
    if (!products || !products.itemEntityList) return <p>Carrinho vazio</p>;

    return (
        <div className={style.principal}>
            <h1>Meu Carrinho</h1>
            <div className={style.produtos}>
                {products.itemEntityList.slice(0, 3).map((produto, index) => (
                    <ItemCarrinho
                        key={index} // Pode usar index se o ID não estiver disponível
                        imagem={produto.image} 
                        nomeProduto={produto.nameItem} 
                        preco={produto.getprice} 
                    />
                ))}
            </div>
        </div>
    );
}
