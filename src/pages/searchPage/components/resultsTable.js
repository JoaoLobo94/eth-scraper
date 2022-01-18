import "./resultsTable.css";
import Table from "react-bootstrap/Table";

const ResultsTable = () => {
  return (
    <div className='container mt-3'>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>transaction</th>
            <th>wallet</th>
            <th>to</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          </tr>
          <tr>
          </tr>
          <tr>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ResultsTable;
