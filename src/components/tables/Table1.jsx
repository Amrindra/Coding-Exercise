import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from "@material-ui/core";

const data = [
  { name: "John Doe", email: "john@example.com", address: "123 Main St" },
  { name: "Jane Smith", email: "jane@example.com", address: "456 Oak Ave" },
  { name: "Bob Johnson", email: "bob@example.com", address: "789 Maple Ln" },
  { name: "Sara Lee", email: "sara@example.com", address: "321 Elm St" },
  { name: "Mike Smith", email: "mike@example.com", address: "654 Pine Rd" },
  { name: "Lisa Brown", email: "lisa@example.com", address: "987 Cedar Ave" },
  { name: "Tim Johnson", email: "tim@example.com", address: "741 Oak St" },
  { name: "Jenny Lee", email: "jenny@example.com", address: "963 Main St" },
  { name: "Mike Brown", email: "mike@example.com", address: "258 Pine Ln" },
  { name: "Jane Johnson", email: "jane@example.com", address: "369 Elm Ave" },
  { name: "Bob Lee", email: "bob@example.com", address: "852 Cedar Ln" }
];

const Table1 = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Button disabled={currentPage === 1} onClick={handlePrevPage}>
          Prev
        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            variant={currentPage === index + 1 ? "contained" : "text"}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
        <Button disabled={currentPage === totalPages} onClick={handleNextPage}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Table1;
