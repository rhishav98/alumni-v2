import React from "react";
import Navbars from "./Navbars";
import img from "../photos/teacher.jpg";
import imgs from "../photos/huma.jpg";
import imgss from "../photos/human.webp";
const Alumni = () => {
  return (
    <>
      <Navbars />
      <section className="bg-light mt-5" id="tourist">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-12 col-md-12 mb-4">
              <h3 className="text-center mt-4 text-secondary"> Our Alumni </h3>
            </div>
            <div className="col-md-4">
              <div className="testimonial mb-5">
                <div className="avatar mx-auto">
                  <img
                    src={img}
                    alt=""
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 className="font-weight-bold-dark grey-text mt-4">
                  Henna Paul
                </h4>
                <h4 className="font-weight-bold blue-text my-3">Teacher</h4>
                <p
                  style={{ color: "green" }}
                  className="font-weight-normal dark-grey-text"
                >
                  Working as a Professor at ABC College
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial mb-5">
                <div className="avatar mx-auto">
                  <img
                    src={imgs}
                    alt=""
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 className="font-weight-bold-dark grey-text mt-4">
                  John Doe
                </h4>
                <h4 className="font-weight-bold blue-text my-3">
                  Software Developer
                </h4>
                <p
                  style={{ color: "green" }}
                  className="font-weight-normal dark-grey-text"
                >
                  Working as a Senior Software Engineer at ABC
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial mb-5">
                <div className="avatar mx-auto">
                  <img
                    src={imgss}
                    alt=""
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 className="font-weight-bold-dark grey-text mt-4">
                  Dennial Jackob
                </h4>
                <h4 className="font-weight-bold blue-text my-3">
                  Senior Engineer
                </h4>
                <p
                  style={{ color: "green" }}
                  className="font-weight-normal dark-grey-text"
                >
                  Working as a Civil Engineer at ONGC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Alumni;
