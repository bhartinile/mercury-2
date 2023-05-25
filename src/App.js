import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import OwnerHome from './Components/OwnerHome';
import OwnerProfile from './Components/OwnerProfile';
import LabourModal from './Components/LabourModal';
function App() {
  return (
    <MDBContainer fluid>

      <OwnerHome/>
      <OwnerProfile/>
      <LabourModal/>
    </MDBContainer>
    
  );
}

export default App;
