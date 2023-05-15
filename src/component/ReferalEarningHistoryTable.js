import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const tableData = [
  {
    id: 1,
    name: "Atm",
    age: "goodluckmrdi@gmail.com",
    address: "20/07/2010",
    status: "submited",
    typeme: "20/07/2010",
    date: "submited",
  },

  // Add more objects as needed
];

function handleClick(id) {
  // Define the logic for handling the button click here
  console.log(`Button clicked for row with id ${id}`);
}

function ReferalEarningHistoryTable() {
  return (
    <section className="mx-10">
      <div className="mb-2 mt-10 text-lg font-bold ">
        Username Earning History
      </div>
      <hr></hr>
      <TableContainer>
        <Table>
          <TableHead className="bg-[#E3F0FF]">
            <TableRow>
              <TableCell style={{ fontWeight: 600 }}>#</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Referrer</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Date</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Bonus</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Status</TableCell>
              <TableCell style={{ fontWeight: 600 }}> Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <div className="flex">
                    <button
                      className="mr-2 mt-2 rounded-md bg-blue-900 px-2 py-2 text-xs text-white "
                      onClick={() => handleClick(row.id)}
                    >
                      Status
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}

export default ReferalEarningHistoryTable;
