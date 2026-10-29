import React from "react";
import "./Features.css";

function Features({ features }) {

  return (

    <div className="features-section">

      <h2 className="features-heading">
        Features
      </h2>

      <div className="features-grid">

        {(features || []).map(
          (feature, index) => (

            <div
              key={index}
              className="feature-item"
            >
              {feature}
            </div>

          )
        )}

      </div>

    </div>

  );

}

export default Features;