import React from 'react'

const ReportForm = (startTrip, stopTrip, status, submit) => {
  const title = <h3>Add a Trip</h3>

  return (
    <div style={{backgroundColor:"#E1FFB1", padding:"5%", margin:"5% 0"}}>

    <div className="row">
        <div className="col-6 m-auto">
        <form>
            <div class="form-group mb-3">
                <label for="exampleInputEmail1">Start</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Harvard University" />
            </div>
            <div class="form-group mb-4">
                <label for="exampleInputPassword1">Destination</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Massachusetts Institute of Technology" />
            </div>
            <button type="submit" class="btn btn-success btn-large">Submit</button>
        </form>
        </div>
    </div>
    </div>
    
  )
}
export default ReportForm