import { useEffect, useState } from 'react';
import { getUser } from './util';
import './App.css';
import Navbar from './components/Navbar.jsx'
import ReportForm from './components/ReportForm.jsx';

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
    </div>
  );
}

export default App;
