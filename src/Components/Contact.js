import React from "react";

// MUI
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

// CUSTOM
import Layout from "../Main Component/Layout";
import ContactForm from "../Common/ContactForm";
import Map from "../Common/Map";

function Contact() {
  return (
    <>
      <Layout>
        <div className="contact-content">
          <div className="sec-1">
            <ContactForm />

            <div className="card">
              <h1>Quick Contact</h1>

              <div className="single">
                <div className="icon">
                  <LocationOnIcon />
                </div>
                <div className="text">
                  <h3>Address:</h3>
                  <p>
                    Satyam Industrial Estate,Block No.19, Gat
                    no.591/1&529,Airport Road , Janori, Tal:Dindori, Dist:Nashik
                    (MH)-422206
                  </p>
                </div>
              </div>

              <div className="single">
                <div className="icon">
                  <EmailIcon />
                </div>
                <div className="text">
                  <h3>E-mail:</h3>
                  <p>nutrihubipl@gmail.com</p>
                </div>
              </div>

              <div className="single">
                <div className="icon">
                  <CallIcon />
                </div>
                <div className="text">
                  <h3>PHONE</h3>
                  <p>18002108987</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sec-2">
            <Map />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Contact;
