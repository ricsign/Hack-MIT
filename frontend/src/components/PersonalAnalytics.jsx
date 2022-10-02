import React from "react";

function PersonalAnalytics() {
  return (
    <div className="p-4 mt-5" style={{ backgroundColor: "#E1FFB1" }}>
      <h1>My Analytics</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4 p-4">
        <div class="col">
          <div class="card h-100">
            <img src="https://cdn.80.lv/api/upload/post/3206/images/5d2c729980b39/widen_1220x0.jpg" class="card-img-top" alt="..." height="250px" />
            <div class="card-body">
              <h5 class="card-title">Yesterday</h5>
              <p class="card-text">
                Please walk instead of riding your fancy Bugatti.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://cdn.britannica.com/65/161665-050-C4B1FA75/Waves-North-Shore-Oahu-Hawaiian-Islands.jpg" class="card-img-top" alt="..." height="250px" />
            <div class="card-body">
              <h5 class="card-title">Last Week</h5>
              <p class="card-text">
                Please bike instead of riding your friend's Lambo.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://www.thoughtco.com/thmb/u0q_l5AO58jzsrNOdHqoPxpFnUE=/1885x1414/smart/filters:no_upscale()/wave-pattern-desert-landscape--oman-886145780-5c45542046e0fb00012ebabf.jpg" class="card-img-top" alt="..." height="250px" />
            <div class="card-body">
              <h5 class="card-title">Last Month</h5>
              <p class="card-text">
                You did a great job for not driving your father's Ferrari.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalAnalytics;
