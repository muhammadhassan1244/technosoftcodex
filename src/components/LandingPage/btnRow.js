import React, { Component } from 'react';


const btnRow = () => {
    return (
        <>
                    <div className="row mt-5">
            <button type="button" className="btn btn-primary">
              Industries
            </button>
            <button type="button" className="btn btn-outline-secondary ml-2">
              Services
            </button>
            <button type="button" className="btn btn-outline-success ml-2">
              Solutions
            </button>
          </div>
        </>
    )
}

export default btnRow
