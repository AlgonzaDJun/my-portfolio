import React from "react";
import "../css/contact.css";
import { BsBrowserSafari, BsGithub, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Algonza Dewangga Arjunantyo",
  description: "Algonza Dewangga Arjunantyo",
};

export default function page() {

  return (
    <div className="min-vh-100 w-100 mt-5 py-5 container px-3">
      <div className="p-3 row rounded-4 bg-white">
        <ContactForm/>

        {/* CONTACT SESSION */}
        <div className="col-md-4 col-12">
          <div className="mt-3 mb-5">
            <h2>Contact Me</h2>
          </div>
          <div className="ms-3">
            <div className="mb-3">
              <Link
                href="https://wa.me/6281243367761"
                className="d-flex align-items-center text-decoration-none"
              >
                <BsWhatsapp size={40} color="green" />
                <div className="ms-3" style={{ cursor: "pointer" }}>
                  <div className="text-muted">+6281243367761</div>
                </div>
              </Link>
            </div>
            <div className="mb-3">
              <Link
                href="mailto:algonsadewangga@gmail.com"
                className="d-flex align-items-center text-decoration-none flex-wrap"
              >
                <MdEmail size={40} color="#4285F4" />
                <div className="ms-0 ms-md-3" style={{ cursor: "pointer" }}>
                  <div className="text-muted ">algonsadewangga@gmail.com</div>
                </div>
              </Link>
            </div>
            <div className="mb-3">
              <Link
                href="https://github.com/AlgonzaDJun"
                className="d-flex align-items-center text-decoration-none"
              >
                <BsGithub size={40} color="black" />
                <div className="ms-3" style={{ cursor: "pointer" }}>
                  <div className="text-muted">AlgonzaDJun</div>
                </div>
              </Link>
            </div>
            <div className="mb-3">
              <Link
                href="/"
                className="d-flex align-items-center text-decoration-none"
              >
                <BsBrowserSafari size={40} color="0FB5ee" />
                <div className="ms-3" style={{ cursor: "pointer" }}>
                  <div className="text-muted">My Website</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
