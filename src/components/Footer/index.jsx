import React from "react";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{ borderTop: "1px solid #cccccc", padding: "1rem 0" }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <p style={{ color: "#c4c4c4", marginBottom: "1rem" }}>
          This website is created as part of Hlsolutions program. The materials
          contained on this website are provided for general information only
          and do not constitute any form of advice. HLS assumes no
          responsibility for the accuracy of any particular statement and
          accepts no liability for any and loss or damage which may arise from
          reliance on the information contained on this site.
        </p>
        <p>Copyright 2021 HLS</p>
      </div>
    </div>
  );
};

export default Footer;
