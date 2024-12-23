import { ReactNode } from "react";

export type FilterContextProviderProps = {
    children: ReactNode
}

export type Site = {
    unique_number: number;
    id_no: number;
    rev_bis: string;
    name_en: string;
    name_fr: string;
    name_es: string;
    name_ru: string;
    name_ar: string;
    name_zh: string;
    short_description_en: string;
    short_description_fr: string;
    short_description_es: string;
    short_description_ru: string;
    short_description_ar: string;
    short_description_zh: string;
    justification_en: string;
    justification_fr: string;
    date_inscribed: number;
    secondary_dates: string;
    danger: number;
    date_end: string | null;
    danger_list: string;
    longitude: number;
    latitude: number;
    area_hectares: number;
    C1: number;
    C2: number;
    C3: number;
    C4: number;
    C5: number;
    C6: number;
    N7: number;
    N8: number;
    N9: number;
    N10: number;
    criteria_txt: string;
    category: string;
    category_short: string;
    states_name_en: string;
    states_name_fr: string;
    states_name_es: string;
    states_name_ru: string;
    states_name_ar: string;
    states_name_zh: string;
    region_en: string;
    region_fr: string;
    iso_code: string;
    udnp_code: string;
    transboundary: number;
}

export type CountryInfo  = {
    Name: string;
    Code: string;
}

export type SiteFilterContext = {
    selectedCountry: string;
    setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
    selectedCategory: string;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
    selectedDanger: string;
    setSelectedDanger: React.Dispatch<React.SetStateAction<string>>;
    filteredSites: Site[];
    setFilteredSites: React.Dispatch<React.SetStateAction<Site[]>>;
    siteDetail: Site | null;
    setSiteDetail: React.Dispatch<React.SetStateAction<Site | null>>;
    countries: CountryInfo[];
    setCountries: React.Dispatch<React.SetStateAction<CountryInfo[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    countryError: string | null;
    setCountryError: React.Dispatch<React.SetStateAction<string | null>>;
    siteError: string | null;
    setSiteError: React.Dispatch<React.SetStateAction<string | null>>;
}

