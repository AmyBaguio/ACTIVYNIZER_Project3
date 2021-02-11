import React from "react";

import firebase from '../firebase'

const styles = {
  footerStyle: {
    textAlign: "center",
    marginBottom: "0",
    bottom: "0",
    width: "100%",
  },
};

function Footer() {
  const [email, setEmail] = React.useState("not logged in.")
  firebase.auth().onAuthStateChanged(() => {
    setEmail(firebase.auth().currentUser?.email ?? "not logged in.")
  })
  return (
    <div style={styles.footerStyle} className="footer">
      <div class="alert alert-dark" >
        &copy; *ACTIVYNIZER* Organising Family Events. You are {email}
      </div>
          </div>
  );
}

export default Footer;
