import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <a href="/">Home</a> | <a href="/">Terms and conditions</a> |{" "}
        <a href="/">Privacy Policy</a> | <a href="/">Collection Statement</a> |{" "}
        <a href="/">Help</a> | <a href="/">Manage Account</a>
      </div>
      <div className="footer-row">
        <p>Copyright C 2016 DEMO Streaming. All Rights Reserved</p>
      </div>
      <div className="footer-row-social footer-row">
        <div>
          <i className="fa-brands fa-facebook-f"></i>{" "}
          <i className="fa-brands fa-twitter"></i>{" "}
          <i className="fa-brands fa-square-instagram"></i>
        </div>
        <div>
          <img src="/images/apple-store.png" alt="Apple Store" />{" "}
          <img src="/images/google-store.png" alt="Google Store" />{" "}
          <img src="/images/microsoft-store.png" alt="Microsoft Store" />{" "}
        </div>
      </div>
    </div>
  );
};
