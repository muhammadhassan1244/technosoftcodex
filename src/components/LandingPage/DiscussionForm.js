import React, { Component } from "react";

const DiscussionForm = () => {
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Enter Your Name"
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <div className="input-group input-group-lg">
              <select
                name="field[11]"
                id="field[11]"
                required
                data-name="which_services_are_you_interested_in"
                className="form-control"
              >
                <option selected>Which Service Are You Interested In?</option>
                <option value="Enterprise Software Solutions">
                  Enterprise Software Solutions
                </option>
                <option value="Dedicated Development Team">
                  Dedicated Development Team
                </option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="Web App Development">Web App Development</option>
                <option value="Data Services">Data Services</option>
                <option value="Open edX Services">Open edX Services</option>
                <option value="UI/UX">UI/UX</option>
                <option value="DevOps">DevOps</option>
                <option value="3D App Development">3D App Development</option>
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="Partnership Opportunities">
                  Partnership Opportunities
                </option>
                <option value="RFQ/RFP">RFQ/RFP</option>
              </select>
            </div>
          </div>
          <div className="form-group col-md-6">
            <div className="input-group input-group-lg">
              <select
                name="field[11]"
                id="field[11]"
                required
                data-name="which_services_are_you_interested_in"
                className="form-control"
              >
                <option selected>Which Service Are You Interested In?</option>
                <option value="Enterprise Software Solutions">
                  Enterprise Software Solutions
                </option>
                <option value="Dedicated Development Team">
                  Dedicated Development Team
                </option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="Web App Development">Web App Development</option>
                <option value="Data Services">Data Services</option>
                <option value="Open edX Services">Open edX Services</option>
                <option value="UI/UX">UI/UX</option>
                <option value="DevOps">DevOps</option>
                <option value="3D App Development">3D App Development</option>
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="Partnership Opportunities">
                  Partnership Opportunities
                </option>
                <option value="RFQ/RFP">RFQ/RFP</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Enter Your Phone"
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Enter Your Organization"
              />
            </div>
          </div>
        </div>
        <div className="input-group input-group-lg">
          <textarea
            id="field[6]"
            name="field[6]"
            placeholder="Let us know a bit more about the project you have in mind..."
            required
            data-name="message"
            spellCheck="false"
            className="form-control"
            defaultValue={""}
          />
        </div>
        <div className="row mt-3">
          <div className="col">
            {" "}
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Please send me a non-disclosure agreement
                </label>
              </div>
            </div>
          </div>
          <div className="col text-right">
            {" "}
            <button
              type="submit"
              className="btn btn-primary p-3 btn-sm btn-md-lg"
            >
              LET'S Discuss
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DiscussionForm;
