import React from "react";
import styled from "styled-components";

const HeaderHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 12vh;
  background-color: #4daecd;
  padding: 10px 20px 0px 20px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 10px;
  }
`;

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeaderHome>          
          <h1>Magieiro InfoTech</h1>        
        </HeaderHome>
      </div>
    );
  }
}
export default Home;
