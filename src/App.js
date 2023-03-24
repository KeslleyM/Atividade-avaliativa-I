import React from "react";
import styled from "styled-components";
import Home from "./componentes/Home";

const CardProduto = styled.div`
  height: 65vh;
  width: 18vw;
  padding: 0px 0px 20px 0px;
  box-shadow: 1px 1px 5px #4daecd;
  border-radius: 9px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  overflow: hidden;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 65vw;
  }

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
const ProdutoImg = styled.img`
  width: 100%;
  height: 75%;
`;
const MainPrincipal = styled.div`
  background-color: #eae7e7;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const FooterPrincipal = styled.div`
  background-color: #4daecd;
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    background-color: #4daecd;
    height: 16vh;
  }
`;

const IconeSocial = styled.img`
  height: 5vh;
  margin: 10px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 4vh;
    margin: 3px;
  }
`;

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Kit Intel Core I9 12900k + Asus Tuf Z690-plus D4 + 32 Gb",
        price: 8.111,
        imagemURL: <ProdutoImg src="/img/caneca1.png" />,
        quantidade: 1,
      },
      {
        id: 2,
        name: "Gabinete Gamer K-mex Warlock Cg-a1d4 Fita Led Rgb Preto 2",
        price: 244.0,
        imagemURL: <ProdutoImg src="/img/caneca2.png" />,
        quantidade: 1,
      },
      {
        id: 3,
        name: "Processador Intel Core I9-12900k - Bx8071512900k",
        price: 3.311,
        imagemURL: <ProdutoImg src="/img/caneca3.png" />,
        quantidade: 1,
      },
      {
        id: 4,
        name: "Kit Pc Gamer - Intel I5 3.3ghz + Placa Mae + Memoria Ram",
        price: 739.0,
        imagemURL: <ProdutoImg src="/img/caneca4.png" />,
        quantidade: 1,
      },
      {
        id: 5,
        name: "Placa de vídeo Nvidia Gainward Ghost GeForce RTX 30 Series RTX 3060 NE63060019K9-190AU 12GB",
        price: 2.952,
        imagemURL: <ProdutoImg src="/img/caneca5.png" />,
        quantidade: 1,
      },
      {
        id: 6,
        name: "Ssd 240gb A400 Kingston Disco Sólido Interno",
        price: 156.0,
        imagemURL: <ProdutoImg src="/img/caneca10.png" />,
        quantidade: 1,
      },
    ],
    filtro: "",
    query: "",
    minPrice: "",
    maxPrice: "",
    order: 1,
    pagina: false, 
    
  };
 
  updateOrder = (ev) => {
    this.setState({
      order: ev.target.value,
    });
  };

  render() {

    const novoArrayDeProdutos = this.state.produtos
      .filter((prod) => {
        return prod.name.toLowerCase().includes(this.state.query.toLowerCase());
      })
      .filter((prod) => {
        return this.state.minPrice === "" || prod.price >= this.state.minPrice;
      })
      .filter((prod) => {
        return this.state.maxPrice === "" || prod.price <= this.state.maxPrice;
      })
      .sort((cres, dec) => {
        return this.state.order * (cres.price - dec.price);
      })
      .map((produto) => {
        return (
          <CardProduto>
            {produto.imagemURL}
            <p>{produto.name}</p>
            <p>R${produto.price},00</p>           
          </CardProduto>
        );
      });

    return (
      <div>
        <Home
          query={this.state.query}
          updateQuery={this.updateQuery}
          minPrice={this.state.minPrice}
          updateMinPrice={this.updateMinPrice}
          maxPrice={this.state.maxPrice}
          updateMaxPrice={this.updateMaxPrice}
          order={this.state.order}
          updateOrder={this.updateOrder}          
        ></Home>
        <MainPrincipal>{novoArrayDeProdutos}</MainPrincipal>

        <FooterPrincipal>
          <h3>Contato 27 999105389</h3>
          <div>
            <IconeSocial src="/img/facebook.png" />
            <IconeSocial src="/img/instagram.png" />
            <IconeSocial src="/img/logotipo-social-do-twitter.png" />
          </div>
        </FooterPrincipal>
      </div>
    );
  }
}
export default App;
