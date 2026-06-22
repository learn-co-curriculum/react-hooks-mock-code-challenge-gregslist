import React, { createContext, useState } from "react";

const SearchContext = createContext()

function SearchProvider({ children }){
  const [serachTerm, setSearchTerm] = useState("")

  const value = [serachTerm, setSearchTerm]
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchProvider }