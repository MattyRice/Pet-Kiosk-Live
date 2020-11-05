import React, { Fragment, useState } from "react";
import { MDBBtn, MDBIcon, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
import { showLoading } from "../../helpers/loading";
import { createCategory } from "./../../api/category";

const AdminDashboard = () => {
  const [category, setCategory] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  //EVENT HANDLERS
  const handleMessages = (evt) => {
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleCategoryChange = (evt) => {
    setErrorMsg("");
    setSuccessMsg("");
    setCategory(evt.target.value);
  };

  const handleCategorySubmit = (evt) => {
    evt.preventDefault();

    if (isEmpty(category)) {
      setErrorMsg("Please enter a category");
    } else {
      const data = { category };

      setLoading(true);

      createCategory(data)
        .then((response) => {
          setLoading(false);
          setSuccessMsg(response.data.successMessage);
        })
        .catch((err) => {
          setLoading(false);
          setErrorMsg(err.response.data.errorMessage);
        });
    }
  };
  // VIEWS

  const showHeader = () => (
    <div className="container border-bottom mt-5 mx-auto">
      <div className="row">
        <i
          className="fa fa-home fa-2x align-self-center"
          id="dashboardIcon"
        ></i>
        <h1 className="ml-2 display-5 align-self-center">Overview</h1>
      </div>
    </div>
  );

  const showActionBtns = () => (
    <MDBContainer>
      <MDBRow className="py-3">
        <MDBCol>
          <MDBBtn
            color="primary"
            data-toggle="modal"
            data-target="#addCategoryModal"
          >
            <MDBIcon icon="plus-circle" className="" /> Add Category
          </MDBBtn>
        </MDBCol>
        <MDBCol>
          <MDBBtn color="default">
            <MDBIcon icon="plus-circle" className="" /> Add Product
          </MDBBtn>
        </MDBCol>
        <MDBCol>
          <MDBBtn color="warning">
            <MDBIcon icon="truck" className="" /> View Orders
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );

  const showCategoryModal = () => (
    <div className="modal" id="addCategoryModal" onClick={handleMessages}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form onSubmit={handleCategorySubmit}>
            <div className="modal-header bg-info text-white">
              <h4 className="modal-title font-weight-bold">Add Category</h4>
              <button className="close" data-dismiss="modal">
                <MDBIcon icon="times"></MDBIcon>
              </button>
            </div>
            <div className="modal-body">
              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}

              {loading ? (
                <div className="text-center mt-3">{showLoading()}</div>
              ) : (
                <Fragment>
                  <label
                    htmlFor="defaultFormContactNameEx"
                    className="grey-text"
                  >
                    Category
                  </label>
                  <input
                    type="text"
                    id="defaultFormContactNameEx"
                    className="form-control"
                    name="category"
                    value={category}
                    onChange={handleCategoryChange}
                  />
                </Fragment>
              )}
            </div>
            <div className="modal-footer">
              <div className="text-right mt-1">
                <MDBBtn color="warning" outline type="submit">
                  Submit
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  //RENDER

  return (
    <section>
      {showHeader()}
      {showActionBtns()}
      {showCategoryModal()}
    </section>
  );
};

export default AdminDashboard;
