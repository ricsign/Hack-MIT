import React, {useState, useEffect} from "react";
import data from "../data/personal-analytics.json"
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

function PersonalAnalytics() {
    const [analyticsData, setAnalyticsData] = useState([]);
  useEffect(() => {
    setAnalyticsData(data["personal-analytics"].reverse())
  }, [])
  const lineChart = (
    <Line
        data = {{
            labels: analyticsData.reverse().flatMap(a => a["date"]), 
            datasets: [{
                data: analyticsData.flatMap(a => a["miles-walked"]),
                label: "Walking Distance (Mi)",
                borderColor: "#3333ff",
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                tension: 0.3,
                fill: true
            },{
                data: analyticsData.flatMap(a => a["miles-transit"]),
                label: "Transit Distance (Mi)",
                borderColor: "#green",
                backgroundColor: 'rgba(0, 255, 0, 0.1)',
                tension: 0.3,
                fill: true
            },{
                data: analyticsData.flatMap(a => a["miles-drove"]),
                label: "Driving Distance (Mi)",
                borderColor: "red",
                backgroundColor: 'rgba(255,0 , 0, 0.1)',
                tension: 0.3,
                fill: true
            }],
        }}
    />
);
  return (
    <div id="analytics" className="p-4 mt-5" >
      <h1>My Analytics</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
        <div className="col">
          <div className="card h-100">
            <img src="https://cdn.80.lv/api/upload/post/3206/images/5d2c729980b39/widen_1220x0.jpg" className="card-img-top" alt="..." height="250px" />
            <div className="card-body">
              <h5 className="card-title">Yesterday</h5>
              <p className="card-text">
                Please walk instead of riding your fancy Bugatti.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://cdn.britannica.com/65/161665-050-C4B1FA75/Waves-North-Shore-Oahu-Hawaiian-Islands.jpg" className="card-img-top" alt="..." height="250px" />
            <div className="card-body">
              <h5 className="card-title">Last Week</h5>
              <p className="card-text">
                Please bike instead of riding your friend's Lambo.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://www.thoughtco.com/thmb/u0q_l5AO58jzsrNOdHqoPxpFnUE=/1885x1414/smart/filters:no_upscale()/wave-pattern-desert-landscape--oman-886145780-5c45542046e0fb00012ebabf.jpg" className="card-img-top" alt="..." height="250px" />
            <div className="card-body">
              <h5 className="card-title">Last Month</h5>
              <p className="card-text">
                You did a great job for not driving your father's Ferrari.
              </p>
            </div>
          </div>
        </div>
      </div>
      {lineChart}
    </div>
  );
}

export default PersonalAnalytics;
