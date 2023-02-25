import React, { useState } from "react";
import styled from "styled-components";

import useTable from "../../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

const TableWrapper = styled.table`
  border-collapse: collapse;
  border: none;
  width: 100%;
`;

const TableRowHeader = styled.thead`
  background-color: transparent;
  transition: all 0.25s ease;
  border-radius: 10px;
`;

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <TableWrapper>
        <TableRowHeader>
          <tr>
            <th className={styles.tableHeader}>Country</th>
            <th className={styles.tableHeader}>Capital</th>
            <th className={styles.tableHeader}>Language</th>
          </tr>
        </TableRowHeader>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.name}</td>
              <td className={styles.tableCell}>{el.capital}</td>
              <td className={styles.tableCell}>{el.language}</td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
