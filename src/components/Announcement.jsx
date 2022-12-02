import offer from "../images/offer.png"
import styled from "styled-components";

const OfferText = styled.span`
  padding: 10px 91px;
  font-size: 36px;
  color: red;
  font-family: cursive;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: -48px;
`;

const Announcement = () => {
  return <>
    <img src={offer} alt="offer" />
    <OfferText>Super Deal! Get premium member for $50</OfferText>
  </>;
};

export default Announcement;
