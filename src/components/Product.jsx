import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const ListContainer = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Title = styled.div`
  position: relative;
  top: 138px;
  font-size: 20px;
  color: #000;
`;

const StartCooking = styled.div`
  width: 100%;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <>
    <ListContainer>
        <Image src={item.img} />
        <Title>
          {item.title}
          <div style={{marginTop: "5px"}}>
          <div style={{float:"left", width:"50%"}}>
            <b>{item.time}</b><br/>
            <span style={{fontSize: "12px"}}>Time</span>
          </div>
          <div style={{float:"right", width:"50%"}}>
            <b>{item.cal}</b><br/>
            <span style={{fontSize: "12px"}}>Cal</span>
          </div>
          </div>
        </Title>
      <Info>
        <StartCooking>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        </StartCooking>
        <div style={{width: "100%"}}>
          <a href={"product/"+item.id} style={{backgroundColor: "red", textDecoration: "none", cursor: "pointer", padding: "10px", border: "0px", borderRadius: "8px", color: "#fff"}}>Start Cooking</a>
        </div>
      </Info>
    </ListContainer>
    
    </>
  );
};

export default Product;
