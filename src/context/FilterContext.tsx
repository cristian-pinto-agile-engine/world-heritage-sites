import React, { createContext, useState, useEffect } from "react";
import { fetchSites, fetchCountries } from "../api/endpoints.ts";
import { SiteFilterContext, FilterContextProviderProps, CountryInfo, Site } from "../types/context.ts";

export const FilterContext = createContext<SiteFilterContext | null>(null);

function FilterContextProvider({ children }: FilterContextProviderProps) {
    const [countries, setCountries] = useState<CountryInfo[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string>('co');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedDanger, setSelectedDanger] = useState<string>('All');
    const [filteredSites, setFilteredSites] = useState<Site[]>([]);
    const [siteDetail, setSiteDetail] = useState<Site | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [countryError, setCountryError] = useState<string | null>(null);
    const [siteError, setSiteError] = useState<string | null>(null);

    useEffect(() => {
        const loadCountries = async () => {
            setLoading(true);
            setCountryError(null); 
            try {
                const data = await fetchCountries();
                setCountries(data);
            } catch (error) {
                console.error("Error fetching countries:", error);
                setCountryError("Failed to load countries. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        loadCountries();
    }, []);

    useEffect(() => {
        const loadSites = async () => {
            setLoading(true);
            setSiteError(null);
            try {
                const queryParams = [
                    `iso_code=${selectedCountry}`,
                    selectedCategory !== "All" ? `category=${selectedCategory}` : null,
                    selectedDanger !== "All" ? `danger=${selectedDanger}` : null,
                ]
                    .filter(Boolean)
                    .join("&");

                const data = await fetchSites(queryParams);
                setFilteredSites(data);
            } catch (error) {
                console.error("Error fetching sites:", error);
                setSiteError("Failed to load sites. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        loadSites();
    }, [selectedCountry, selectedCategory, selectedDanger]);

    return <FilterContext.Provider value={{
        selectedCountry, setSelectedCountry, selectedCategory, setSelectedCategory, selectedDanger, setSelectedDanger,
        filteredSites, setFilteredSites, siteDetail, setSiteDetail, countries, setCountries, loading, setLoading,
        countryError, setCountryError, siteError, setSiteError
    }}>
        {children}
    </FilterContext.Provider>
}

export default FilterContextProvider;
