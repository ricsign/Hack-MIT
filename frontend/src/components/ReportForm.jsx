import { React, useState } from "react";

const ReportForm = ({startTrip, stopTrip}) => {
  const title = <h3>Add a Trip</h3>
  const [mode, setMode] = useState("")
  const [isTripStarted, setIsTripStarted] = useState(false);
  const handleStart = () => {
    setIsTripStarted(true)
    startTrip()
  }
  const handleStop = () => {
    setIsTripStarted(false)
    stopTrip()
  }
  return (
    <div className="p-4" style={{ backgroundColor: "#E1FFB1" }}>
      <h2>Record a Trip:</h2>
      {!isTripStarted && (
        <form
        >
          <input
            type="button"
            value="Start Trip"
            className="btn btn-primary btn-lg mt-3"
            onClick={handleStart}
          />
        </form>
      )}

      {isTripStarted && (
        <form >
          <label>
            Pick your mode of transportation:
            <br />
            <select value={mode} onChange={setMode}>
              <option value="walking">Walking</option>
              <option value="biking">Biking</option>
              <option value="transit">Public Transit</option>
              <option value="driving">Driving</option>
            </select>
          </label>
          <br />
          <input
            type="button"
            value="Stop Trip"
            className="btn btn-primary btn-lg mt-3"
            onClick={handleStop}
          />
        </form>
      )}
    </div>
  );
};
export default ReportForm;
