import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: #000;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Footer = () => {
  return (
    <div>
      <Left>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Right>
        <Title>Contact</Title>
        
      </Right>
    </div>
  );
};

export default Footer;
