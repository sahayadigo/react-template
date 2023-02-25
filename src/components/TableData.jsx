import React, { useState } from "react";

import countriesData from "../data/countries";
import Table from "./Table";

const TableData = () => {
  const [countries] = useState([...countriesData]);
  return (
    <>
        <Table data={countries} rowsPerPage={4} />
    </>
  );
};

export default TableData;