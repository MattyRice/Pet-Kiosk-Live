import React from "react";

export const showErrorMsg = (msg) => (
  <div
    className="alert alert-danger col-lg-3 col-md-5 col-sm-12 mx-auto mt-4 mb-1"
    role="alert"
  >
    {msg}
  </div>
);

export const showSuccessMsg = (msg) => (
  <div
    className="alert alert-success col-lg-3 col-md-5 col-sm-12 mx-auto mt-4 mb-1"
    role="alert"
  >
    {msg}
  </div>
);
