import React from "react";
import { ArrowBackSharp } from "@material-ui/icons";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import MaterialTableList from "../components/MaterialTableList";
const Breadcrumb = styled.div`
  text-align: left;
  padding: 5px;
`;
export default function Home() {
  return (
      <>
        <Navbar />
        <Breadcrumb>
        <ArrowBackSharp/> Back to all grave sites
        </Breadcrumb>
        <MaterialTableList />
        {/* <Products/> */}
      </>    
  );
};
