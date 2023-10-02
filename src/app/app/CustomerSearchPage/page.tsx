'use client'
import React, { useState } from "react"
import SearchBar from "../components/searchBar"

const CustomerSearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm: any) => {


    // const fakeCustomers = [

    //   'cliente 1',
    //   'cliente 2',
    //   'cliente 3',
    //   'cliente 4',
    //   'cliente 5',
    //   'laranjas',
    //   'bananas',
    //   'maçãs',
    //   'uvas',
    // ];

    // const filteredResults = fakeCustomers.filter((customer) =>
    //   customer.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // setSearchResults(filteredResults);
  };


  return (
    <div className="p-3">
      <SearchBar onSearch={handleSearch} />
      <ul className="
       bg-[#bfbebe]
      w-[15%] border border-[#1118276e]
      rounded-lg ml-3 fixed
      text-black
      ">
        {searchResults.map((result, index) => (
          <li 
          className="
          cursor-pointer hover:bg-[#111827] hover:rounded-md hover:text-white 
          " key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerSearchPage;