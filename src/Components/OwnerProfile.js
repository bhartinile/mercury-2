import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBRadio,
  MDBInput,
  MDBCheckbox,
  MDBDropdown, 
  MDBDropdownMenu,
   MDBDropdownToggle, 
   MDBDropdownItem ,
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBListGroup,
    MDBListGroupItem
}
from 'mdb-react-ui-kit';

function OwnerProfile() {



  return (
    <MDBCard className="mb-4">
    <MDBCardBody>
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText>Full Name</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
        </MDBCol>
      </MDBRow>
      <hr />
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText>Email</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">example@example.com</MDBCardText>
        </MDBCol>
      </MDBRow>
      <hr />
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText>Phone</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
        </MDBCol>
      </MDBRow>
      <hr />
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText>Mobile</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
        </MDBCol>
      </MDBRow>
      <hr />
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText>Address</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
        </MDBCol>
      </MDBRow>
      <hr/>
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText>Aadhar Number</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">123456</MDBCardText>
        </MDBCol>
      </MDBRow>
      <hr/>

      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText>Address</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
        </MDBCol>
        <hr/>
        <hr/>
        <MDBCol md="6">
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text purple lighten-3" id="basic-text1">
            <MDBIcon  icon="search" />
          </span>
        </div>
        <input
          className="form-control my-0 py-1"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </MDBCol>
      </MDBRow>
      
    </MDBCardBody>
  </MDBCard>


  );
}

export default OwnerProfile;