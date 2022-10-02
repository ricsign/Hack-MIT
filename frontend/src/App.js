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
import { routes } from './data/routes';

function App() {
  const DATA_SOURCE = "gps"

  const [trips, setTrips] = useState([]);
  const [tripMode, setTripMode] = useState("walking")
  const [localDataPos, setLocalDataPos] = useState({ file: 0, line: 0 })
  const [userReduced, setReduced] = useState({});
  const [status, setStatus] = useState(null);
  const [delay, setDelay] = useState(null);
  const [distanceTraveled, setDistance] = useState(0);

  const addToTrip = (coord) => {
    setTrips(old => {
      const lastInd = old.length - 1;
      const prevTrips = old.slice(0, lastInd);
      prevTrips.push({ type: old[lastInd].type, coords: [...old[lastInd].coords, coord]});
      return prevTrips;
    });
  }

  const getLocation = () => {
    if (DATA_SOURCE === "gps") {
      if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
      } else {
        setStatus(null)
        navigator.geolocation.getCurrentPosition((position) => {
          let tempLat = position.coords.latitude
          let tempLng = position.coords.longitude
          let lastTrip = trips[trips.length - 1]
          let lastLoc = lastTrip.coords.length > 0 ? lastTrip.coords[lastTrip.coords.length - 1] : { lat: tempLat, lng: tempLng }
          let distance = getPreciseDistance(
            { latitude: lastLoc.lat, longitude: lastLoc.lng },
            { latitude: tempLat, longitude: tempLng }
          );
          setDistance(oldDistance => oldDistance + distance);
          addToTrip({lng: tempLng, lat: tempLat})
        }, () => {
          setStatus('Unable to retrieve your location');
        });
      }
    } else if (DATA_SOURCE === "local") {
      addToTrip(routes[localDataPos.file][localDataPos.line]);
      setLocalDataPos((old) => ({
        file: old.file,
        line: Math.min(old.line + 1, routes[old.file].length - 1),
      }))
    }
  }

  const startTrip = () => {
    setTrips([...trips, {type: tripMode, coords: []}])
    getLocation()
    setDelay(5000);
  };

  const endTrip = () => {
    setLocalDataPos(old => ({ file: Math.min(routes.length - 1, old.file + 1), line: 0 }));
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

  useEffect(() => {
    console.log(tripMode);
    setTrips((old) => {
      if (old.length > 0) {
        old[old.length - 1].type = tripMode;
      }
      return old;
    });
  }, [tripMode]);

  return (
    <div className="App">
      <div className="headline d-flex">
        <Navbar />
        <h1 className="align-self-end my-5 py-3">
          Today, you have reduced {userReduced["today"]} <br/>
          <b style={{fontSize: "60px"}}>1230 T</b>
        </h1>
        
      </div>
      <RouteMap trips={trips} />
      <ReportForm
        startTrip = {startTrip}
        stopTrip = {endTrip}
        mode={tripMode}
        setMode={setTripMode}
      />
      <Leaderboard />
      <PersonalAnalytics />
    </div>
  );
}

export default App;
