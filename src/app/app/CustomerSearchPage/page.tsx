'use client'
import React, { useState, useEffect, useRef } from "react"
import SearchBar from "../components/searchBar"

const CustomerSearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState([])
  const searchContainerRef = useRef(null);
  const [value, setValue] = useState()



  const handleSearch = (term: any) => {
    setSearchTerm(term);


    const filteredResults = fakeCustomers.filter((customer) =>
      customer.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleOptionClick = (option: any) => {
    setSearchTerm(option);
  };

  const handleClickOutside = (event: { target: any }) => {
    if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.addEventListener('click', handleClickOutside);
    };
  }, []);

  const searchItem = (searchTerm: any) => {
    setValue(searchTerm);

    console.log('search', searchTerm)
  };

  return (
    <div className="p-3">
      <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
      {/* <div ref={searchContainerRef}>

        <ul className="
       bg-[#bfbebe]
       w-[26%] border border-[#1118276e]
       rounded-lg ml-3 fixed
       text-black
       ">
          {searchResults.map((result, index) => (
            <li
              className="
          cursor-pointer hover:bg-[#111827]
          hover:rounded-md hover:text-white 
          " key={index}
              onClick={() => searchItem(searchTerm)}

            >
              {result}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default CustomerSearchPage;