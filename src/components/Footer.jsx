import styled from "styled-components";

const Wrapper = styled.div`
  background: #343A40;
  height: 100px;
  color: #fff;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  float: left;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  float: right;
`;

const NavItem = styled.ul`
  display: inherit;
  padding-left: 0px;
  list-style: none;
  float: right;
`;

const NavItemList = styled.li`
  padding: 10px;
  color: #d1d1d1;
    display: inline;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Left>
        &nbsp; 2023 Copyright
      </Left>
      <Right>
        <NavItem>
          <NavItemList>About</NavItemList>
          <NavItemList>Terms</NavItemList>
          <NavItemList>Contact</NavItemList>
        </NavItem>
        
      </Right>
    </Wrapper>
  );
};

export default Footer;
