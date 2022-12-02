import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
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

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Search style={{ color: "gray", fontSize: 20 }} />
            <Input placeholder="Search" />
            
          </SearchContainer>
        </Left>
        <Right>
          <MenuItem>
            <button style={{backgroundColor: "red", padding: "10px", border: "0px", borderRadius: "8px", color: "#fff"}}>Go to Premium</button>
          </MenuItem>
        </Right>
      </Wrapper>
    </>
  );
};

export default Navbar;
