import React from "react";
import "./Services.css";

import service1 from "../assets/service.1.jpg";
import service2 from "../assets/service.2.jpg";
import service3 from "../assets/service.3.jpg";
import service4 from "../assets/service.4.jpg";
import service5 from "../assets/service.5.jpg";
import service6 from "../assets/service.6.jpg";

function Services() {

  return (

    <div className="services-section">

      {/* TITLE */}
      <h1 className="services-title">
        OUR SERVICES
      </h1>


      {/* SERVICES GRID */}
      <div className="services-grid">

        {/* BOX 1 */}
        <div className="service-card">

          <img
            src={service1}
            alt=""
          />

          <div className="overlay">

            <h2>
              Car Repair
            </h2>

            <p>
            Professional repair service for all car models.
            </p>

            <button>
              Booked Now
            </button>

          </div>

        </div>


        {/* BOX 2 */}
        <div className="service-card">

          <img
            src={service2}
            alt=""
          />

          <div className="overlay">

            <h2>
              Garage Service
            </h2>

            <p>
              Modern garage support with expert technicians.
            </p>

            <button>
              Booked Now
            </button>

          </div>

        </div>


        {/* BOX 3 */}
        <div className="service-card">

          <img
            src={service3}
            alt=""
          />

          <div className="overlay">

            <h2>
              Workshop Care
            </h2>

            <p>
             Advanced workshop solutions for better performance.
            </p>

            <button>
              Booked Now
            </button>

          </div>

        </div>


        {/* BOX 4 */}
        <div className="service-card">

          <img
            src={service4}
            alt=""
          />

          <div className="overlay">

            <h2>
              Vehicle Inspection
            </h2>

            <p>
              Complete checking and maintenance for your car.
            </p>

            <button>
              Booked Now
            </button>

          </div>

        </div>


        {/* BOX 5 */}
        <div className="service-card">

          <img
            src={service5}
            alt=""
          />

          <div className="overlay">

            <h2>
              Car Washing
            </h2>

            <p>
             Premium washing and detailing services available.
            </p>

            <button>
              Booked Now
            </button>

          </div>

        </div>


        {/* BOX 6 */}
        <div className="service-card">

          <img
            src={service6}
            alt=""
          />

          <div className="overlay">

            <h2>
              Engine Service
            </h2>

            <p>
               Professional engine repair and
              servicing available.
            </p>

            <button>
              Booked Now
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Services;