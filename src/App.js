
import './App.css';
import InfoCards from './components/info-cards';
import MainCard from './components/main-card';

function App() {
  return (
    <div className="App">
      <div className="container">
        <MainCard />
        <InfoCards />
      </div>
    </div>
  );
}

export default App;
