import React from "react";

function Leaderboard() {
  return (
    <div className="mt-4">
      <h1 id="leaderboard">Leaderboard</h1>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Emission Reduced (kg)</th>
            <th scope="col">Green Distance (Mi)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark L.</td>
            <td>148</td>
            <td>32</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob K.</td>
            <td>128</td>
            <td>21</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jason G.</td>
            <td>91</td>
            <td>35</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Yang M.</td>
            <td>81</td>
            <td>15</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td><b>Timmy (Me)</b></td>
            <td><b>80</b></td>
            <td><b>23</b></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Hart N.</td>
            <td>80</td>
            <td>32</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Kathy N.</td>
            <td>78</td>
            <td>29</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
