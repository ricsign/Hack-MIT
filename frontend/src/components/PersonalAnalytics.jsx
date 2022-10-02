import React from "react";

function PersonalAnalytics() {
  return (
    <div className="p-4 mt-5" style={{ backgroundColor: "#E1FFB1" }}>
      <h1>My Analytics</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4 p-4">
        <div class="col">
          <div class="card h-100">
            <img src="https://cdn.80.lv/api/upload/post/3206/images/5d2c729980b39/widen_1220x0.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Yesterday</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://cdn.80.lv/api/upload/post/3206/images/5d2c729980b39/widen_1220x0.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Last Week</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://cdn.80.lv/api/upload/post/3206/images/5d2c729980b39/widen_1220x0.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Last Month</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalAnalytics;
