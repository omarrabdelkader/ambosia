import React from "react";
import {FaInstagram, FaGoogle, FaFacebook, FaTwitter, FaGithub, FaLinkedinIn} from 'react-icons/fa'
function Footer() {
  return (
    <footer class="bg-dark text-center text-white">
      <div class="container p-4 pb-0">
        <section class="mb-6">
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FaFacebook/>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FaTwitter/>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FaGoogle/>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FaInstagram/>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FaLinkedinIn/>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <FaGithub/>
          </a>
        </section>
      </div>

      <div
        class="text-center p-10 copyright"
      >
        © 2020 Copyright:
        <a class="text-white" href="localhost:3000">
           ambrosia
        </a>
      </div>
    </footer>
  );
}

export default Footer;
