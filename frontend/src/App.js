import { useEffect, useState } from 'react';
import { getUser } from './util';
import useInterval from 'react-useinterval';
import getPreciseDistance from 'geolib/es/getDistance';
import './App.css';
import Navbar from './components/Navbar.jsx'
import ReportForm from './components/ReportForm.jsx';
import RouteMap from './components/RouteMap.jsx'
import Leaderboard from './components/Leaderboard';
import PersonalAnalytics from './components/PersonalAnalytics';

function App() {
  const [userReduced, setReduced] = useState({});
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [locations, setLocations] = useState([]);
  const [status, setStatus] = useState(null);
  const [delay, setDelay] = useState(null);
  const [distanceTraveled, setDistance] = useState(0);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        var distance = getPreciseDistance(
          {latitude: lat, longitude: lng},
          {latitude: position.coords.latitude, longitude: position.coords.longitude}
        );
        setDistance(oldDistance => oldDistance + distance);
        setLocations(locations => [...locations, [position.coords.latitude, position.coords.longitude]]);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }


  const startTrip = () => {
    setDelay(30000);
  };

  const endTrip = () => {
    setDelay(null);
  };

  useInterval(() => {
    getLocation();
    if (status != null) {
      setDelay(null)
    }
  }, delay);

  useEffect(() => {
    var curReduced = getUser(0);
    setReduced(curReduced);

  }, []);

  return (
    <div className="App">
      <Navbar />
      <h2>Today: you have reduced {userReduced["today"]}</h2>
      <RouteMap trips={
          [
              {type: "driving", coords: [
                  {lat: 42.3736, lng: -71.1097},
                  {lat: 42.3601, lng: -71.0589},
                  {lat: 42.3651, lng: -71.0089},
              ]},
              {type: "biking", coords: [
                  {lat: 42.3736, lng: -71.6097},
                  {lat: 42.3601, lng: -71.5589},
                  {lat: 42.3651, lng: -71.5089},
              ]},
          ]}
      />
      <ReportForm startTrip = {startTrip} endTrip = {endTrip}/>
      <Leaderboard />
      <PersonalAnalytics />
    </div>
  );
}

export default App;
