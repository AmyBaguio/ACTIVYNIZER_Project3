import React from "react";

const styles = {
    footerStyle: { 
      textAlign: 'center',
      marginBottom: '0',
      bottom: '0',
      position: 'fixed',
      width: '100%',
    }
  };

function Footer() {
    return (
        <div style={styles.footerStyle} className="footer">
    <div class="alert alert-primary" role="alert" >
        &copy; A  C  T  I  V  Y  N  I  Z  E  R  
    </div>
</div>
    );
}

export default Footer;