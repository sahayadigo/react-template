import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  color: #000;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
    color: #000;
`;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Favourites = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR RECIPES</Title>
        <Top>
          <TopButton>CONTINUE ADDING</TopButton>
          <TopTexts>
            <TopText>Selected Recipes(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">ADD NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/5/0/VM0104_Pico-de-Gallo_s4x3.jpg.rend.hgtvcom.406.305.suffix/1623700214426.jpeg?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Pico de Gallo
                  </ProductName>
                  <ProductId>
                    <b>MINITES:</b> 45
                  </ProductId>
                  <ProductColor color="green" />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>26 CAL</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/E2_flourtortillas_OCHS5382_s4x3.jpg.rend.hgtvcom.406.305.suffix/1567710916481.jpeg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Flour Tortillas
                  </ProductName>
                  <ProductId>
                    <b>MINITES:</b> 67
                  </ProductId>
                  <ProductColor color="red" />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>50 CAL</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>FAVOURITE RECIPES</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Total Cal</SummaryItemText>
              <SummaryItemPrice>100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Total video length</SummaryItemText>
              <SummaryItemPrice>125 minutes</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Average Time spent</SummaryItemText>
              <SummaryItemPrice>62 minutes</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total Cal</SummaryItemText>
              <SummaryItemPrice>80</SummaryItemPrice>
            </SummaryItem>
            <Button>ADD MORE</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Favourites;
