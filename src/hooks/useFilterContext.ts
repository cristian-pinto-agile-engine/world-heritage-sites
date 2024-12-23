import React, { useContext } from "react";
import { SiteFilterContext } from "../types/context";
import { FilterContext } from "../context/FilterContext.tsx";

function useFilterContext(): SiteFilterContext {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("FilterContext must be used within a Provider");
  }
  return context;
}

export default useFilterContext;