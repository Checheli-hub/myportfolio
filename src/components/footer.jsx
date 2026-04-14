import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container py-4 text-center">
      <p className="text-secondary mb-0">
        &copy; {currentYear} **CHECHE TECH**. All rights reserved.
        <span className="d-block d-md-inline ms-md-2">
          Built with passion for <strong>UI/UX Design</strong> &{" "}
          <strong>Great Software</strong>.
        </span>
      </p>
    </footer>
  );
}

export default Footer;
