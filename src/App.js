import MainCard from './components/main-card';
import InfoCardsDaily from './components/info-cards-daily';
import InfoCardsWeekly from './components/info-cards-weekly';
import InfoCardsMonthly from './components/info-cards-monthly';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
        <div className="container">
        <BrowserRouter>
        <MainCard />
          <Routes>
            <Route path='/daily' element={<InfoCardsDaily />} />
            <Route path='/weekly' element={<InfoCardsWeekly />} />
            <Route path='/monthly' element={<InfoCardsMonthly />} />
            <Route path="*" element={<Navigate to="/daily" replace />}
    />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
