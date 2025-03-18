import ProductCard from '../productCard/ProductCard'
import style from './maisVendidos.module.css'

export default function MaisVendidos(){
    return(
        <div className={style.divProdutos}>
            <h1>
                Mais vendidos
            </h1>
            <div className={style.produtos}>
                <ProductCard 
                fotoProduto={"https://i.pinimg.com/736x/d1/6f/9d/d16f9d6c461fb571fb1a25759fff3de5.jpg"} nomeProduto={"Brownie com Nutella"}
                descricaoProduto={"Um delicioso bolo macio com nutella por cima "}
                preco={"12,00"}
                />

                <ProductCard 
                fotoProduto={"https://i.pinimg.com/736x/d1/6f/9d/d16f9d6c461fb571fb1a25759fff3de5.jpg"} nomeProduto={"Brownie com Nutella"}
                descricaoProduto={"Um delicioso bolo macio com nutella por cima "}
                preco={"12,00"}
                />

                <ProductCard 
                fotoProduto={"https://i.pinimg.com/736x/d1/6f/9d/d16f9d6c461fb571fb1a25759fff3de5.jpg"} nomeProduto={"Brownie com Nutella"}
                descricaoProduto={"Um delicioso bolo macio com nutella por cima "}
                preco={"12,00"}
                />
            </div>
        </div>
    )
}