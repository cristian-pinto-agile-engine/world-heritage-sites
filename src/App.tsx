import React, { Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SiteList from './components/SiteList/SiteList.tsx';
import Header from './components/Header/Header.tsx';
import FilterPanel from './components/FilterPanel/FilterPanel.tsx';
import FilterContextProvider from './context/FilterContext.tsx';
import { CircularProgress } from '@mui/material';

const SiteDetails = React.lazy(() => import('./components/SiteDetails/SiteDetails.tsx'));

function App() {
  return (
    <FilterContextProvider>
      <Router>
        <Header />
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route path='/' element={<><FilterPanel /><SiteList /></>} />
            <Route path='/site/:id' element={<SiteDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </FilterContextProvider>
  );
}

export default App;