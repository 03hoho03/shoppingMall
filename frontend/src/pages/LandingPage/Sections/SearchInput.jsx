import React from "react";

const SearchInput = ({ searchTerm, onSearch }) => {
  return (
    <input
      className="p-2 border border-gray-300 rounded-md"
      type="text"
      placeholder="검색"
      onChange={onSearch}
      value={searchTerm}
    />
  );
};

export default SearchInput;
