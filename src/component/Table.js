import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 40 },
  { field: "firstName", headerName: "Transaction History", width: 160 },
  { field: "lastName", headerName: "Transaction Type", width: 160 },
 
  {
    field: "fullName",
    headerName: "Transaction Status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => {
      return `${params.row.firstName || ""} ${params.row.lastName || ""}`;
    },
  },
  {
    field: "date",
    headerName: "Transaction Date",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => {
      return `${params.row.date || ""} ${params.row.l || ""}`;
    },
  },

  {
    field: "amount",
    headerName: "Transaction Amount",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => {
      return `${params.row.amount || ""} ${params.row.l || ""}`;
    },
  },

  
  

];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, date:"23-04-2025", amount:"20000" },
  
];

export default function Table() {
  return (
    <div style={{ height: 300 }} className=" mt-10 md:mx-10">
      <div className="text-lg font-bold">Transaction Details</div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
