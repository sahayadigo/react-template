import React from "react";
import DataTable from "react-data-table-component";
import payments from "../../data/data";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

const TopItem = styled.div`
  padding: 8px;
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

const NavItemLink = styled.a`
  color: green;
  text-decoration: none;
  padding: 10px;
  border-bottom: 4px solid green;
`;

const TopLink = styled.span`
float:left;
font-weight:bold;
color: green;
`;

function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage);
}

function toPages(pages) {
  const results = [];

  for (let i = 1; i < pages; i++) {
    results.push(i);
  }

  return results;
}

const columns = [
  {
    name: "Receipt",
    selector: (row) => row.id,
    sortable: true
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true
  },
  {
    name: "Date Paid",
    selector: (row) => row.datepaid,
    sortable: true
  },
  {
    name: "Paid By",
    selector: (row) => row.paidby,
    sortable: true,
    right: true
  },
  {
    name: "Number of payment",
    selector: (row) => row.noofpayment,
    sortable: true
  },
  {
    name: "Total",
    selector: (row) => row.amount,
    sortable: true
  },
  {
    button: true,
    cell: () => (
      <div className="App">
        <div className="openbtn text-center">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            --
          </button>
          <div className="modal" tabIndex="-1" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Payment Status</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Paid Successfully.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

// RDT exposes the following internal pagination properties
const BootyPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage, // available but not used here
  currentPage
}) => {
  const handleBackButtonClick = () => {
    onChangePage(currentPage - 1);
  };

  const handleNextButtonClick = () => {
    onChangePage(currentPage + 1);
  };

  const handlePageNumber = (e) => {
    onChangePage(Number(e.target.value));
  };

  const pages = getNumberOfPages(rowCount, rowsPerPage);
  const pageItems = toPages(pages);
  const nextDisabled = currentPage === pageItems.length;
  const previosDisabled = currentPage === 1;

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleBackButtonClick}
            disabled={previosDisabled}
            aria-disabled={previosDisabled}
            aria-label="previous page"
          >
            Previous
          </button>
        </li>
        {pageItems.map((page) => {
          const className =
            page === currentPage ? "page-item active" : "page-item";

          return (
            <li key={page} className={className}>
              <button
                className="page-link"
                onClick={handlePageNumber}
                value={page}
              >
                {page}
              </button>
            </li>
          );
        })}
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleNextButtonClick}
            disabled={nextDisabled}
            aria-disabled={nextDisabled}
            aria-label="next page"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
  <div className="form-check">
    <input
      htmlFor="booty-check"
      type="checkbox"
      className="form-check-input"
      ref={ref}
      onClick={onClick}
      {...rest}
    />
    <label className="form-check-label" id="booty-check" />
  </div>
));

function MaterialTableList() {
  return (
    <div className="App">
      <div className="card">
        <TopItem>
        <TopLink>
          Grave Site 01-1001-5.01
        </TopLink>
        <NavItem>
          <NavItemList>Grave Site Details</NavItemList>
          <NavItemList><NavItemLink>Payment History</NavItemLink></NavItemList>
        </NavItem>
          </TopItem>
        <DataTable
          title="Payment History"
          columns={columns}
          data={payments}
          defaultSortFieldID={1}
          pagination
          paginationComponent={BootyPagination}
          selectableRows
          selectableRowsComponent={BootyCheckbox}
        />
        <div>
          <b>Grand Total</b>: $145
        </div>
      </div>
      
      
    </div>
  );
}

export default MaterialTableList;