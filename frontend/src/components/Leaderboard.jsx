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
            <th scope="col">Emission Reduced (T)</th>
            <th scope="col">Green Distance (Mi)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark L.</td>
            <td>14813</td>
            <td>32</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob K.</td>
            <td>12892</td>
            <td>21</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jason G.</td>
            <td>9171</td>
            <td>35</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Yang M.</td>
            <td>8171</td>
            <td>15</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td><b>Timmy (Me)</b></td>
            <td><b>8098</b></td>
            <td><b>23</b></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Hart N.</td>
            <td>8065</td>
            <td>32</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Kathy N.</td>
            <td>7821</td>
            <td>29</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
