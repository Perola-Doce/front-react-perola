import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import'./index.css'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import ProductCard from './Components/productCard/ProductCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />

    

    <divprodutos>
      <h1>
        Mais vendidos
      </h1>
      <produtos>
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
      </produtos>
    </divprodutos>
    <Footer />
  </StrictMode>,
)
