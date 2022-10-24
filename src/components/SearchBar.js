import React from "react";

function SearchBar({ setSearchTitle }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Hero"
        className="search font-medium text-xl focus:outline-none focus:ring focus:border-red-400 ... h-9 w-80 px-4 py-3 text-gray-200 rounded-2xl ml-8 border-solid border-2 border-red-500 bg-transparent"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;