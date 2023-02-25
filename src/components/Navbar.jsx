import { Dashboard, DoneAllSharp, ArrowDownward, Money, Settings, QuestionAnswer,Search } from "@material-ui/icons";
import React from "react";
import logo from "../images/logo.png"
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #343A40;
  color: #fff;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Input = styled.input`
  padding: 5px;
  width: 289px;
  background: none;
  border: none;
  border-bottom: 1px solid;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  cursor: pointer;
  margin-left: 25px;
`;

const NavItem = styled.ul`
  display: inherit;
  padding-left: 0px;
  list-style: none;
`;

const NavItemList = styled.li`
  padding: 10px;
  color: #fff;
  width: 135px;
`;

const NavItemLink = styled.a`
  background: #6c757d;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 12px;
`;

const MyProfile = styled.div`
  float: right;
`;

const NameIcon = styled.span`
    float: left;
    background: green;
    padding: 4px;
    border-radius: 15px;
    width: 31px;
`;
const NameText = styled.p`
    margin: 0px;
    text-align: left;
    padding-left: 8px;
    font-size: 12px;
`;

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Left>
        <SearchContainer>
          <a href="/"><img src={logo} alt="logo" /></a>
        </SearchContainer>
        <SearchContainer>
          <NavItem>
            <NavItemList><NavItemLink href="#"><Dashboard/>Maintain</NavItemLink></NavItemList>
            <NavItemList><Money/>Payments</NavItemList>
            <NavItemList><DoneAllSharp/>Reports</NavItemList>
          </NavItem>
        </SearchContainer>
        <SearchContainer>
            <Search style={{ color: "gray", fontSize: 20 }} />
            <Input placeholder="Search" />
          </SearchContainer>
          <MenuItem>
          
          <Settings style={{paddingTop: "8px"}}/>
          <QuestionAnswer style={{paddingTop: "8px"}}/>
            <MyProfile>
              <NameIcon>
                JS
              </NameIcon>
              <div style={{float: "left"}}>
                <NameText>John Steve</NameText>
                <NameText>Municipality Officer</NameText>
              </div>
              <ArrowDownward/>
            </MyProfile>
          </MenuItem>
        </Left>
      </Wrapper>
    </>
  );
};

export default Navbar;
