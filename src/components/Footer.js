import React from "react";
import firebase from '../firebase'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const styles = {
  footerStyle: {
    textAlign: "center",
    width: "100%",
    height: "10px",
    fontSize: "1.5rem",
    backgroundColor: "gray"
    // fontFamily: "ApppleSystem"
  },
};

const FooterPage = () => {
  const [email, setEmail] = React.useState("not logged in.")
  firebase.auth().onAuthStateChanged(() => {
    setEmail(firebase.auth().currentUser?.email ?? "not logged in.")
  })
  return (
    
      
        <MDBFooter color="blue" className="font" style={{
            fontFamily: "uiSansSerif",
            fontSize: "1.5rem",
            backgroundColor: "#115293",
            padding: "2px",
            color: "white"
          }}>
          <MDBContainer fluid className="text-center" >
            <MDBRow>
              <MDBCol md="12">
                <h1 className="title">Logged in as: {email}</h1>
                
              </MDBCol>
              
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-10">
            <MDBContainer fluid>
              &copy; *ACTIVYNIZER* Organising Family Events
            </MDBContainer>
          </div>
        </MDBFooter>
      );
    }
    
    export default FooterPage;

  //   <div >
  //     <div style={styles.footerStyle} className="footer">
  //       &copy; *ACTIVYNIZER* Organising Family Events. 
  //       <br/>You are {email}
  //     </div>
  //         </div>
  // );


// export default Footer;
