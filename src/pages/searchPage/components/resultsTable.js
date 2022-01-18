import "./resultsTable.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const ResultsTable = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.etherscan.io/api?module=account&action=tokentx&address=0xcdA16A18d3F942571E7ba81B7D2219A6802C45A1&startblock=&endblock=99999999&page=1&offset=10&sort=asc&apikey=A8AW15HDJT3J4GM9N64QRPUAC712ZSS2T6"
      )
      .then((res) => {
        setTransactions(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container mt-3">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Transaction</th>
            <th>Wallet</th>
            <th>To</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr>
              <td key={index + 1}>{index + 1}</td>
              <td key={transaction.hash}>{transaction.hash}</td>
              <td key={transaction.contractAddress}>
                {transaction.contractAddress}
              </td>
              <td key={transaction.to}>{transaction.to}</td>
              <td key={transaction.value}>{transaction.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ResultsTable;
