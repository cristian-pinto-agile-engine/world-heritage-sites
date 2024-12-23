import React, { useCallback, useMemo, useContext } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography, CircularProgress } from "@mui/material";
import { FilterContext } from "../../context/FilterContext.tsx";
import { debounce } from 'lodash';

function FilterPanel() {
  const {
    countries,
    selectedCountry,
    setSelectedCountry,
    selectedCategory,
    setSelectedCategory,
    selectedDanger,
    setSelectedDanger,
    loading,
    countryError
  } = useContext(FilterContext)!;

  const handleCountryChange = useCallback(debounce((event: SelectChangeEvent) => {
    setSelectedCountry(event.target.value as string);
  }, 300), [setSelectedCountry]);

  const handleCategoryChange = useCallback(debounce((event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value as string);
  }, 300), [setSelectedCategory]);

  const handleDangerChange = useCallback(debounce((event: SelectChangeEvent) => {
    setSelectedDanger(event.target.value as string);
  }, 300), [setSelectedDanger]);

  const categoryOptions = useMemo(() => [
    <MenuItem value="All" key="all">All</MenuItem>,
    <MenuItem value="Cultural" key="cultural">Cultural</MenuItem>,
    <MenuItem value="Natural" key="natural">Natural</MenuItem>,
    <MenuItem value="Mixed" key="mixed">Mixed</MenuItem>
  ], []);

  const dangerOptions = useMemo(() => [
    <MenuItem value="All" key="all">All</MenuItem>,
    <MenuItem value="0" key="no">No</MenuItem>,
    <MenuItem value="1" key="yes">Yes</MenuItem>
  ], []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (countryError) {
    return <Box sx={{ margin: 5 }}><Typography variant="h6" color="error">{countryError}</Typography></Box>;
  }

  if (!countries || countries.length === 0) {
    return <Box sx={{ margin: 5 }}><Typography variant="h6">No countries available. Please try again later.</Typography></Box>;
  }

  return (
    <Box sx={{ padding: "10px" }}>
      <Typography variant="h6" gutterBottom>
        Filter Sites
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: "20px" }}>
        You can use the country, category, or danger status filters to narrow
        down your search.
      </Typography>

      <Box sx={{ display: "flex", gap: 2, marginBottom: "10px" }}>
        <FormControl fullWidth>
          <InputLabel id="select-country-label">Country</InputLabel>
          <Select
            labelId="select-country-label"
            id="select-country"
            value={selectedCountry}
            label="Country"
            onChange={handleCountryChange}
          >
            {countries.map((item, index) => (
              <MenuItem key={index} value={item.Code}>
                {item.Name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="select-category-label">Category</InputLabel>
          <Select
            labelId="select-category-label"
            id="select-category"
            value={selectedCategory}
            label="Category"
            onChange={handleCategoryChange}
          >
            {categoryOptions}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="select-danger-label">In Danger</InputLabel>
          <Select
            labelId="select-danger-label"
            id="select-danger"
            value={selectedDanger}
            label="In Danger"
            onChange={handleDangerChange}
          >
            {dangerOptions}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default FilterPanel;
