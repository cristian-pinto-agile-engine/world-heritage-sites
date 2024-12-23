import React, { useState } from "react";
import useFilterContext from "../../hooks/useFilterContext.ts";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Typography, CircularProgress } from "@mui/material";

function SiteList() {
  const { filteredSites, loading, siteError } = useFilterContext();
  const navigate = useNavigate();

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Handle page change
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSiteDetail = (site: any) => {
    navigate(`/site/${site.unique_number}`);
  };

  // Paginate filteredSites
  const paginatedSites = filteredSites.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ padding: 3 }}>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      ) : siteError ? (
        <Box><Typography variant="h6" color="error">{siteError}</Typography></Box>
      ) : paginatedSites?.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Site</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Category</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedSites?.map((site) => (
                <TableRow
                  key={site.unique_number}
                  hover
                  onClick={() => handleSiteDetail(site)}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell>{site.name_en}</TableCell>
                  <TableCell>{site.date_inscribed}</TableCell>
                  <TableCell>{site.category}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredSites.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      ) : (
        <Typography variant="h4">No results</Typography>
      )}
    </Box>
  );
}

export default SiteList;
