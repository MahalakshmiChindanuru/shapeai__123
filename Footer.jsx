import React from "react";

function Footer() {
  var cuYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @{cuYear}</p>
    </footer>
  );
}

export default Footer;
