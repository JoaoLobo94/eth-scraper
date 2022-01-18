import "./searchPage.css";
import "./components/searchBar";
import SearchBar from "./components/searchBar";
import ResultsTable from "./components/resultsTable";

const SearchPage = () => {
  return (
    <div>
        <SearchBar />
        <ResultsTable />
    </div>
  );
};

export default SearchPage;
