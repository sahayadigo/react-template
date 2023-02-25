import MaterialTableList from "../components/MaterialTableList";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Support = () => {
  return (
    <Container>
      <MaterialTableList />
    </Container>
  );
};

export default Support;
