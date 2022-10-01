import { useEffect, useState } from 'react';
import { getUser } from './util';
import './App.css';
import Navbar from './components/Navbar.jsx'
import ReportForm from './components/ReportForm.jsx';
import RouteMap from './components/RouteMap.jsx'

function App() {
  const [userReduced, setReduced] = useState({});

  useEffect(() => {
    var curReduced = getUser(0);
    setReduced(curReduced);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <h2>Today: you have saved {userReduced["today"]}</h2>
      <ReportForm />
      <RouteMap trips={
          [
              [
                  {lat: 42.3736, lng: -71.1097},
                  {lat: 42.3601, lng: -71.0589},
              ]
          ]}
      />
    </div>
  );
}

export default App;
