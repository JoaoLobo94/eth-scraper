import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './resultsTable.css'

const ResultsTable = (props) => {
  const [transactions, setTransactions] = useState([]);
  const [scraperState, setScraperState] = useState(true);
  const [page, setPage] = useState(1);

  const changePage = () => {
    axios
      .get(
        `https://api.etherscan.io/api?module=account&action=txlist&address=${props.wallet}&startblock=${props.block}&page=${page}&offset=20&sort=asc&apikey=${process.env.REACT_APP_API}`
      )
      .then((res) => {
        if (res.data.message !== "OK") {
          setScraperState(false);
        } else {
          setTransactions(res.data.result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const previousPage = () => {
    if (page !== 1) {
      setPage(page - 1);
      changePage();
    }
  };
  const nextPage = () => {
    setPage(page + 1);
    changePage();
  };

  useEffect(() => {
    changePage();
  }, []);

  if (scraperState) {
    return (
      <div className="p-3">
        <Table striped hover>
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
                <td>{transaction.hash}</td>
                <td>{transaction.from}</td>
                <td>{transaction.to}</td>
                <td key={transaction.value}>
                  {transaction.value / 1000000000000000000} ETH
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Row className="justify-content-md-center mt-2">
          <Col md="auto">
            <Button variant="warning" onClick= {previousPage}>Previous page </Button>
            </Col>
            <Col md="auto">
            <Button variant="success" onClick={nextPage}>Next page</Button>
            </Col>
            </Row>
      </div>
    );
  } else  {
    return (
      <div className='container mt-3'>
        <h1 className="text-center">There is no data to show, please reset the page</h1>
      </div>
    );
}};

export default ResultsTable;
