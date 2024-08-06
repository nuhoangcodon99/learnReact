import { useState } from "react";

const  Jumbotron = () => {
  let [btnToggle,setBtnToggle] = useState(false)

    return (
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <div className="container-fluid py-5 text-center">
          <h1 className="display-5 fw-bold">Custom jumbotron</h1>
          { btnToggle &&
          <p className="col-md-8 fs-4 m-auto mt-5 mb-5">
            Using a series of utilities, you can create this jumbotron, just like
            the one in previous versions of Bootstrap. Check out the examples
            below for how you can remix and restyle it to your liking.
          </p>
          }
          <button onClick ={() => {setBtnToggle(!btnToggle )}}  className="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>
      </div>
    );
  }
export default Jumbotron;