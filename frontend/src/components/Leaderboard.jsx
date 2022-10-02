import React from "react";

function Leaderboard() {
  return (
    <div className="mt-5">
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
            <td>Mark</td>
            <td>14813</td>
            <td>32</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>12892</td>
            <td>21</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
