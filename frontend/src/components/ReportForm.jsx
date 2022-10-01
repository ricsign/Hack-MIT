import {React, useState} from 'react'

const ReportForm = (startTrip, stopTrip, status) => {
  const title = <h3>Add a Trip</h3>
  const [mode, setMode] = useState("")


  return (

    <div>
      <hr/>
      <h2>Record a Trip:</h2>
      <form onSubmit={startTrip}>
        <input type="submit" value="Start Trip"></input>
      </form>
      <form onSubmit={stopTrip}>
        <label>
          Pick your mode of transportation:
          <br/>
            <select value={mode} onChange={setMode}> 
              <option value="walking">Walking</option>
              <option value="biking">Biking</option>
              <option value="transit">Public Transit</option>
              <option value="driving">Driving</option>
            </select>
        </label>
        <input type="submit" value="Stop Trip" />
      </form>
    </div>
    
    
  )
}
export default ReportForm