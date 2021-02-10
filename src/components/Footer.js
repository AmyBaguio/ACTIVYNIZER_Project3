import React from "react";

const styles = {
  footerStyle: {
    textAlign: "center",
    marginBottom: "0",
    bottom: "0",
    width: "100%",
  },
};

function Footer() {
  return (
    <div style={styles.footerStyle} className="footer">
      <div class="alert alert-dark" >
        &copy; *ACTIVYNIZER* Organising Family Events
      </div>
    </div>
  );
}

export default Footer;
