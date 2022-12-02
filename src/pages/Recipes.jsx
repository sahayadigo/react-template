import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  color: #000;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  color: #000;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Recipes = () => {
  return (
    <Container>
      <Navbar />
      <Title>Recipes</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sort Recipes:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </Container>
  );
};

export default Recipes;
