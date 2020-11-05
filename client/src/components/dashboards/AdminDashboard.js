import React from "react";
import { MDBBtn, MDBIcon, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AdminDashboard = () => {
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
    <div className="modal" id="addCategoryModal">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-info text-white">
            <h4 className="modal-title font-weight-bold">Add Category</h4>
            <button className="close" data-dismiss="modal">
              <MDBIcon icon="times"></MDBIcon>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <label htmlFor="defaultFormContactNameEx" className="grey-text">
                Category
              </label>
              <input
                type="text"
                id="defaultFormContactNameEx"
                className="form-control"
              />
            </form>
          </div>
          <div className="modal-footer">
            <div className="text-right mt-1">
              <MDBBtn color="warning" outline type="submit">
                Submit
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </div>
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
