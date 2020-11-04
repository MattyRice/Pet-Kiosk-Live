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
          <MDBBtn color="primary">
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

  //RENDER

  return (
    <section>
      {showHeader()}
      {showActionBtns()}
    </section>
  );
};

export default AdminDashboard;
